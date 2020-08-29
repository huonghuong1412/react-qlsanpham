import React, { Component } from 'react';
import Title from '../../components/Title/Title'
import Products from '../../components/Products/Products'
import ProductItem from '../../components/ProductItem/ProductItem'
// import ProductContainer from '../../container/ProductsContainer'
import { connect } from 'react-redux';
import callAPI from '../../callAPI/callAPI';
import { Link } from 'react-router-dom';

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        callAPI('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    deleteProduct = (id) => {
        callAPI(`products/${id}`, 'DELETE', null).then((res) => {
            if (res.status === 200) {
                callAPI('products', 'GET', null).then(res => {
                    this.setState({
                        products: res.data
                    })
                })
            }
        })
    }

    showListProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return <ProductItem
                    key={index}
                    product={item}
                    index={index}
                    deleteProduct={this.deleteProduct}
                ></ProductItem>
            })
        }
        return result;
    }
    render() {
        // var products = this.props.products;
        var products = this.state.products;
        return (
            <>
                <div className="col-12">
                    <Title />
                    <Link
                        className="btn btn-primary btn-add"
                        to="/products/add"
                    >Thêm sản phẩm</Link>
                </div>
                <Products>
                    {this.showListProducts(products)}
                </Products>
                {/* <ProductContainer /> */}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsPage);