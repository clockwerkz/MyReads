import React from 'react';
import BookShelfChanger from './BookShelfChanger';

const Book = (props) => {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+(props.book.imageLinks && props.book.imageLinks.thumbnail)+')' }}></div>
                <BookShelfChanger 
                    book={props.book}
                    changeShelf={props.changeShelf}
                />
            </div>
            <div className="book-title">{props.book && props.book.title}</div>
            <div className="book-authors">{props.book.authors && props.book.authors[0]}</div>
        </div>
    );
}


export default Book;
