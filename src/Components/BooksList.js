import React, { Component } from 'react';

import SearchField from './SearchField';
import Book from './book';
import books from '../books.json';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {books: books}
    }
    renderBooks = () => {
        return this.state.books.map(book => {
            return (
                <div className="four wide column" key={book.id}>
                    <Book book={book} addToCart={this.props.addToCart}/>
                </div>
            );
        });
};

    onSearchChange = (term) => {
        const filterdBooks = books.filter(book => book.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
        this.setState({books: filterdBooks});
      };

    

    render(){
        return (
            <div className="ui one column center aligned grid">
                <div className="column twelve wide">
                    <SearchField onSearchChange={this.onSearchChange}/>
                </div>
                <div className="ui grid segment">
                    {this.renderBooks()}
                </div>
            </div>
        );
    }
};

export default BookList;