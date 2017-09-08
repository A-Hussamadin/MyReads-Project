import React, { Component } from 'react';
import Shelf from './Shelf';

class BooksList extends Component{
    render(){
      
     

      const {  books  } = this.props;

   
        return (
         
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <Shelf type={'currentlyReading'}
                   books={books}
                   onUpdateShelf={this.props.updateShelf}
                   />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <Shelf 
                  type={'wantToRead'}
                  books={books}
                  onUpdateShelf={this.props.updateShelf}
                  />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <Shelf 
                  type={'read'}
                  books={books}
                  onUpdateShelf={this.props.updateShelf}
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.props.onSearchClick()}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default BooksList;