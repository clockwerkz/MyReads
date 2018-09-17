import React from 'react';

const Book = (props) => {

    const optionValues = [
        {value :'move', text:'Move to...'},
        {value: 'currentlyReading', text:'Currently Reading'}, 
        {value:'wantToRead',text:'Want to Read'}, 
        {value:'read', text:'Read'}, 
        {value:'none', text:'None'}
    ];

    const clickedChange = (e)=> {
        props.changeShelf(e.target.value, props.book);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+props.book.imageLinks.thumbnail+')' }}></div>
            <div className="book-shelf-changer">
                <select 
                    onChange={clickedChange}
                    value={props.book.shelf}
                >
                    {optionValues.map((option)=> 
                        <option 
                            value={option.value} 
                            key={option.value} 
                            disabled={option.value==='move'}
                        >{option.text}</option>
                    )}
                </select>
            </div>
        </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors[0]}</div>
        </div>
    );
}


export default Book;
