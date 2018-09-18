import React, { Component } from "react";
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
                    console.log(this.state);
                    this.setState(({ books : data }));
                }
                else {
                    console.log("No Books found");
                    this.setState(({ books : [] }));
                }
            });
        }
    }

    render() {
        return (
        <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={this.props.returnToShelf}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
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