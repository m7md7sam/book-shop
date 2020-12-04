import React from 'react';

const Cart = ({ booksinCard }) => {
      const renderBooks = booksinCard.map(book => {
        return (
            <div className="ui middle aligned divided list" key={book.id}>
                <div className="item">
                    <div className="right floated content">
                        <div className="ui button">Delete</div>
                    </div>
                    <img className="ui mini image" alt={book.title} src={book.imageLink} />
                    <div className="content ui breadcrumb">
                        <div className="section">{book.title}</div>
                        <div className="divider">--</div>
                        <div className="section">{book.price} $</div>
                    </div>
                </div>
            </div>
    );
      });
    
    const total = booksinCard.reduce((acc, current) => acc + current.price, 0);
    if(booksinCard.length === 0) {
        return <div>You don't add any Book</div>
    }
    return (
        <div className="ui one column centered grid">
            <div className="column red">
                <h1>Lis of Your books:</h1>
            </div>
            <div className="ten wide column">
                {renderBooks}
            </div>
            <div className="ui ten wide column segment">
            <div className="ui right aligned header">
                <h3>Total Price: {total}</h3>
            </div>
            </div>
        </div>
    );
};

export default Cart;