import React, { Component } from 'react';
import callAPI from '../../callAPI/callAPI'
import { Link } from 'react-router-dom';

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
            callAPI(`products/${id}`, 'GET', null).then((res) => {
                // console.log(res.data);
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    status: res.data.status
                })
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
        // console.log(this.state);
        var { name, price, id, status } = this.state;
        var { history } = this.props;
        if ((name === "" || price === "")) {
            alert("Không bỏ trống dữ liệu")
        } else if (Number.isInteger(price) === false) {
            alert('Giá phải là số tự nhiên');
        } else {
            if (id) {
                callAPI(`products/${id}`, 'PUT', {
                    name: name,
                    price: price,
                    status: status
                }).then((res) => {
                    // console.log(res);
                    history.goBack();
                })
            } else {
                callAPI('products', 'POST', {
                    name: name,
                    price: price,
                    status: status
                }).then((res) => {
                    // console.log(res);
                    history.goBack();
                })
            }
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


export default ProductsActionsPage;