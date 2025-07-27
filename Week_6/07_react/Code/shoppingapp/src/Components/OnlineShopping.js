import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
    constructor(props) {
        super(props);

        this.items = [
            new Cart("Laptop", 80000),
            new Cart("TV", 120000),
            new Cart("Washing Machine", 50000),
            new Cart("Mobile", 30000),
            new Cart("Fridge", 70000)
        ];
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'green' }}>Items Ordered :</h2>
                <table border="1" align="center" style={{ color: 'green' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.itemname}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OnlineShopping;