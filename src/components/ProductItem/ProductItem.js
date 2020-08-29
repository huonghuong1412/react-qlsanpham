import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status === true ? "Còn hàng" : "Hết hàng";
        var statusClass = product.status === true ? "badge badge-cyan" : "badge badge-waring";
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
                    <button className="btn btn-action btn-info">Sửa</button>
                    <button className="btn btn-action btn-warning">Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;