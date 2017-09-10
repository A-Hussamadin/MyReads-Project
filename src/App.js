import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksList from './BooksList';
import SearchPage from './SearchPage';
class BooksApp extends React.Component {
  state = {
    books :  [],
    searchedBooks: [],
  
    showSearchPage: false
  }

  componentDidMount() {
    this.getAllBooks();
    
}

getAllBooks=() => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

updateShelf = (book, shelf) =>{
   
    BooksAPI.update(book, shelf).then((res) => {
        this.getAllBooks();
    })
    

  }


  showSearchPage =()=> {
    this.setState({ showSearchPage: true })
  }

  checkBookShelf=(bookID)=>{
   let b = this.state.books.find((book)=>{
      return book.id === bookID
    });

    if (b)
      return b.shelf;
    else 
      return 'none';
    
    
  }
  render() {
    return (
      <div className="app">
          <Route path='/search' render={()=>(
            <SearchPage
              userBooks={this.state.books}
              updateShelf={this.updateShelf}
              checkBookShelf={this.checkBookShelf}
            />
          )}/>

          
          <Route  exact path='/' render={() =>(
            <BooksList 
            books={this.state.books}
            updateShelf={this.updateShelf}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
