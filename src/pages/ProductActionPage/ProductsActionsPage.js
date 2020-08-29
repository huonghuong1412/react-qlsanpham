import React, { Component } from 'react';

class ProductsActionsPage extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <form>
                                <div className="form-group">
                                    <label>Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Price"
                                        name="price"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái</label>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" />
                                        <label class="form-check-label" for="exampleCheck1">Còn hàng</label>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="button" className="btn btn-add mr-2 btn-info">Huỷ bỏ</button>
                                    <button type="button" className="btn btn-add ml-2 btn-primary">Lưu lại</button>
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