import React, { Component } from 'react';
import {Router, Route} from "react-router-dom";

import Header from './Header';
import Cart from './Cart';
import BookList from './BooksList';
import BookDetails from './BookDetails';
import history from '../history';

class App extends Component {

  state = {
    booksinCard: []
  };
  
  addToCart = (book) => {
    this.setState({booksinCard: [...this.state.booksinCard, book]})
}
  
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <div>
            <Route path="/" exact>
              <BookList addToCart={this.addToCart} />
            </Route>
            <Route path="/cart" exact>
              <Cart booksinCard={this.state.booksinCard}/>
            </Route>
            <Route path="/book/:id" exact render={(props) => <BookDetails {...props} addToCart={this.addToCart}/>} />
          </div>
      </Router>
    </div>
        
    );
  };
}

export default App;
