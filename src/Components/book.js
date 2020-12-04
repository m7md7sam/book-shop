import React from 'react';
import {Link} from 'react-router-dom';

const Book = ({ book, addToCart }) => {
    return (
        <div className="ui card">
            <div className="ui small images centered">
                <Link to={`/book/${book.id}`} className="header">
                <img alt={book.title} src={book.imageLink}/>
                </Link>    
            </div>
            <div className="content center aligned">
                <p className="header">{book.title}</p>
                <button className="ui button" onClick={() => addToCart(book)}>Add to Cart</button>                        
            </div>
        </div>
    );
};

export default Book;