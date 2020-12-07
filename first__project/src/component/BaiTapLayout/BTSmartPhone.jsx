
import React, { Component } from 'react';
import BTProduct from './BTProduct';
var repeatelem = function (n) {
    var ListProduct = [];
    for (var i = 0; i < n; i++) {
        ListProduct = ListProduct.concat(<BTProduct />);
    };
    return ListProduct;
};

export default class BTSmartphone extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="my-5 text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {repeatelem(4)}
                </div>
                <h1 className="my-5 text-center">BEST LAPTOP</h1>
                <div className="mb-5 row">
                    {repeatelem(4)}
                </div>
            </div>
        )
    }
}
