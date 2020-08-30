import React, { Component } from 'react';
import Title from '../../components/Title/Title'
import Products from '../../components/Products/Products'
import ProductItem from '../../components/ProductItem/ProductItem'
// import ProductContainer from '../../container/ProductsContainer'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index'


class ProductsPage extends Component {

    componentDidMount() {
        this.props.getListProducts();
    }

    deleteProduct = (id) => {
        this.props.deleteProductItem(id);
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
        var { products } = this.props;
        // var products = this.state.products;
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

const mapDispatchToProps = (dispatch) => {
    return {
        // getListProducts: (products) => {
        //     dispatch(actions.getListProducts(products))
        // },
        getListProducts: () => {
            dispatch(actions.actGetRequest())
        },
        deleteProductItem: (id) => {
            dispatch(actions.actDeleteRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);