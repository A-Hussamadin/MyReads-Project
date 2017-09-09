import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {

    state={
        query:'',
        books: []
    }

    updateQuery = (query)=>{
        this.setState({query : query.trim()})
        let maxResults = 10;
        BooksAPI.search(query, maxResults).then((books)=>{
          
          this.setState({books})
        })

    }
    
    render(){
      console.log(this.state.books);
        return (
          
            <div className="search-books">
            
          
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
               placeholder="Search by title or author"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
               />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            { this.state.books.length > 0  && (
             
              
              this.state.books.map((book)=>(
            <li key={book.id} >
            <Book book={book}
            onUpdateShelf={this.props.updateShelf}
                onCheckBookShelf={this.props.checkBookShelf}
            />
            </li>
           ))
         
            )}
            </ol>
          </div>
          </div>
        )
    }
}

export default SearchPage;