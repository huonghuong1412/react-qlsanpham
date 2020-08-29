import React from 'react'
import { connect } from 'react-redux';
import Products from '../components/Products/Products'
import ProductItem from '../components/ProductItem/ProductItem'

class ProductsContainer extends React.Component {
    showListProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return <ProductItem
                    key={index}
                    product={item}
                    index={index}
                ></ProductItem>
            })
        }
        return result;
    }
    render() {
        var products = this.props.products;
        return (
            <>
                <Products>
                    {this.showListProducts(products)}
                </Products>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer)