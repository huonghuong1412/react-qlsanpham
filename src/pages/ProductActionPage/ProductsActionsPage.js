import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index'
import { connect } from 'react-redux';

class ProductsActionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.editProductItem(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("NextProps: ", nextProps);
        if (nextProps && nextProps.itemEdit) {
            this.setState({
                id: nextProps.itemEdit.id,
                name: nextProps.itemEdit.name,
                price: nextProps.itemEdit.price,
                status: nextProps.itemEdit.status
            })
        }
    }

    handleChangeForm = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    saveData = (e) => {
        e.preventDefault();
        var { name, price, id, status } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: name,
            price: price,
            status: status
        }
        if (id) {
            this.props.updateProductItem(product)
            history.goBack();
            this.props.getListProduct();
        } else {
            this.props.addProduct(product);
            history.goBack();
        }
    }

    render() {
        var { name, price, status } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <form onSubmit={this.saveData}>
                                <div className="form-group">
                                    <label>Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Price"
                                        name="price"
                                        value={price}
                                        onChange={this.handleChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái</label>
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="status"
                                            value={status}
                                            checked={this.state.status}
                                            onChange={this.handleChangeForm}
                                        />
                                        <label className="form-check-label">Còn hàng</label>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <Link
                                        className="btn btn-add mr-2 btn-info"
                                        to='/products-list'
                                    >Huỷ bỏ</Link>

                                    <button
                                        type="submit"
                                        className="btn btn-add ml-2 btn-primary"
                                    >Lưu lại</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEdit: state.itemEdit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProduct: () => {
            dispatch(actions.actGetRequest())
        },
        addProduct: (product) => {
            dispatch(actions.actAddRequest(product))
        },
        editProductItem: (id) => {
            dispatch(actions.actGetProductItemRequest(id))
        },
        updateProductItem: (product) => {
            dispatch(actions.actUpdateRequest(product))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsActionsPage);