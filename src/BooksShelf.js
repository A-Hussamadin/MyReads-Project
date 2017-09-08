import React, { Component } from 'react';


class BooksShelf extends Component{

 
  
  
    render(){
      
      let shelfBooks;

      const { type , books  } = this.props;
     

      
      shelfBooks = books.filter((book) => book.shelf === type);

        return (
         
           <ol className="books-grid">
             {
              shelfBooks.map((book)=>(
                <li key={book.id} >
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage : `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select defaultValue={book.shelf} onChange={(e) => this.props.onUpdateShelf(book, e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
               ))
             }
               
              
            </ol>

        )
    }
}

export default BooksShelf;