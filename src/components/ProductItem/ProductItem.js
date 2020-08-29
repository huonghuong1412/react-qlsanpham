import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <label className="badge badge-cyan">
                        Còn hàng
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