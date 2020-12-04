import React from 'react';

import books from '../books.json';

const BookDetails = props => {
    const {id} = props.match.params;
    const book = books.find(b => b.id === parseInt(id));
    return (
        <div className="ui two column centered grid">
            <div className="column red">
                <h1>{book.title}</h1>
            </div>
            <div className="four column centered row">
                <div className="column">
                    <img alt={book.title} src={`/${book.imageLink}`} />
                </div>
                <div className="column">
                    <h4>Title: {book.title}</h4>
                    <h4>Author: {book.author}</h4>
                    <h4>Country: {book.country}</h4>
                    <h4>Language: {book.language}</h4>
                    <h4>Year: {book.year}</h4>
                    <h4>Pages numbers: {book.pages}</h4>
                    <button className="ui button" onClick={() => props.addToCart(book)}>Add to Cart</button> 
                </div>
            </div>
        </div>
    );
};

export default BookDetails;