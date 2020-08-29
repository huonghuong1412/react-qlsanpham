import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status === true ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status === true ? "badge badge-cyan success" : "badge badge-waring warning";
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <label className={statusClass}>
                        {statusName}
                    </label>
                </td>
                <td>
                    <Link
                        className="btn btn-action mr-2 btn-info"
                        to={`/products/${product.id}/update`}
                    >Sửa</Link>
                    <button
                        className="btn btn-action btn-warning"
                        onClick={() => this.deleteProduct(product.id)}
                    >Xoá</button>
                </td>
            </tr>
        );
    }

    deleteProduct = (id) => {
        if (confirm('Ban có chắc chắn muốn xoá?')) { //eslint-disable-line
            this.props.deleteProduct(id)
        }
    }
}

export default ProductItem;