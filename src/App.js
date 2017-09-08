import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BooksList from './BooksList';
import SearchPage from './SearchPage';
class BooksApp extends React.Component {
  state = {
    books :  [],
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
    console.log(this.state.log)
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
  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchPage}/>

          
          <Route  exact path='/' render={() =>(
            <BooksList 
            books={this.state.books}
            updateShelf={this.updateShelf}
            onSearchClick={this.showSearchPage}
            />
        )} />
         
        )}
      </div>
    )
  }
}

export default BooksApp
