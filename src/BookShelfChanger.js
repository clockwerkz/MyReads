import React from 'react';

const BookShelfChanger = (props) => {
    const clickedChange = (e)=> {
        props.changeShelf(e.target.value, props.book);
    }

    const optionValues = [
        {value :'move', text:'Move to...'},
        {value: 'currentlyReading', text:'Currently Reading'}, 
        {value:'wantToRead',text:'Want to Read'}, 
        {value:'read', text:'Read'}, 
        {value:'none', text:'None'}
    ];

    return (
    <div className="book-shelf-changer">
        <select 
            onChange={clickedChange}
            value={props.book.shelf ? (props.book.shelf):('None')}
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
    );

}

export default BookShelfChanger;