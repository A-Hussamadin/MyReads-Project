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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
    
    //this.getAllBooks();
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
              myBooks={this.state.books}
              updateShelf={this.updateShelf}
              checkBookShelf={this.checkBookShelf}
            />
          )}/>

          
          <Route  exact path='/' render={() =>(
            <BooksList 
            books={this.state.books}
            updateShelf={this.updateShelf}
            checkBookShelf={this.checkBookShelf}
            />
        )} />
      </div>
    )
  }
}

export default BooksApp
