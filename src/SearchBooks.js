import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchBooks extends Component {

    state = {
        books : []
    }


    
    searchBooks = (searchString)=> {
        if (searchString) {
            BooksAPI.search(searchString)
            .then((data)=> {
                if (!data.error) {
                    
                    this.setState(({ books : data.map((book)=>{
                        let shelfBook = this.props.currentShelf.find((bookOnShelf)=> bookOnShelf.id === book.id);
                        if (shelfBook) return shelfBook;
                        else {
                            book.shelf = 'none';
                            return book;
                        }
                    }) }));
                }
                else {
                    this.setState(({ books : [] }));
                }
            });
        } else {
            this.setState(({ books : [] }));
        }
    }

    render() {
        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' 
                className="close-search" 
                onClick={this.props.returnToShelf}>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=> {
                  this.searchBooks(event.target.value);
                }}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.length!==0 && this.state.books.map((book)=><li key={book.id}><Book 
              book={book}
              changeShelf={this.props.changeShelf} 
          /></li>)}  
              </ol>
            </div>
        </div>
        );
    }

}

export default SearchBooks;