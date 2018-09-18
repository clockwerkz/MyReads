import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './Bookshelf';
import SearchBooks from './SearchBooks';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelf : []
  }

  componentDidMount = ()=> {
    BooksAPI.getAll()
      .then((books) => this.setState({ shelf : books }));
  }

  changeShelf = (newShelf, bookToChange)=> {
    bookToChange.shelf = newShelf;
    if (this.state.shelf.indexOf(bookToChange)!==-1){
      this.setState((prevState)=> ({shelf : prevState.shelf.map((book)=> {
        if (book.id === bookToChange.id) {
          return bookToChange
        } else {
          return book
        }
      })}));
    } else {
      this.setState((prevState) => ({ shelf : prevState.shelf.concat([ bookToChange ]) }))
    }
    //console.log(this.state);
    BooksAPI.update(bookToChange, newShelf);
  }

  returnToShelf = ()=> {
    this.setState({ showSearchPage: false })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            currentShelf={this.state.shelf} 
            changeShelf={this.changeShelf}
            returnToShelf={this.returnToShelf}
          />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                  books={this.state.shelf.filter((book)=> book.shelf==='currentlyReading')}
                  title='Currently Reading'
                  changeShelf= {this.changeShelf}
                />
                <Bookshelf 
                  books={this.state.shelf.filter((book)=> book.shelf==='wantToRead')}
                  title='Want to Read'
                  changeShelf= {this.changeShelf}
                />
                <Bookshelf 
                  books={this.state.shelf.filter((book)=> book.shelf==='read')}
                  title='Read'
                  changeShelf= {this.changeShelf}
                />
                
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
