import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book book={props.books.map((book)=> <Book book={book} />)} />
                    </li>
                </ol>
            </div>
        </div>
    );

}

export default Bookshelf;