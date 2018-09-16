import React from 'react'

class BookShelf extends React.Component {
    render() {
        return (
            <div>
                {this.props.books.map((book)=> (<li>{book.publishedDate}</li>))}
            </div>
        );
    }
}

export default BookShelf;