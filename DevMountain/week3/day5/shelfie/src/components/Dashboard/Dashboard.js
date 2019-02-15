import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
            imgURL: '',
            productName: '',
            price: 0
        }
    }

    handleImgURL(val) {
        this.setState({
            imgURL: val
        });
    }

    handleProductName(val) {
        this.setState({
            productName: val
        });
    }

    handlePrice(val) {
        this.setState({
            price: val
        });
    }

    handleCancel() {
        this.setState({
            imgURL: '',
            productName: '',
            price: 0
        });
    }



    



    render() {
        const mappedProducts = this.props.products.map(product => {
            return (
            <Product product={product}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}/>
            )
        });

        return (
            <div>
                Dashboard
                <input
                type='text'
                value={this.state.imgURL}
                onChange={e => this.handleImgURL(e.target.value)}
                />

                <input
                type='text'
                value={this.state.productName}
                onChange={e => this.handleProductName(e.target.value)}
                />

                <input type='text'
                value={this.state.price}
                onChange={e => this.handlePrice(e.target.value)}/>


                <button onClick={() => this.handleCancel()}>Cancel</button>

                <button >Add to Invetory</button>

                <Product />
                {mappedProducts}

            </div>
        )
    }
}