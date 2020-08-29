import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Title from '../Title/Title'
import './index.css'

class Products extends Component {
  render() {
    return (
      <div className="col-12">
        <Title />
        <table className="table table-bordered table-hover mt-3">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="th-stt">STT</th>
              <th scope="col" className="th-code">Mã</th>
              <th scope="col" className="th-name">Tên</th>
              <th scope="col" className="th-price">Giá</th>
              <th scope="col" className="th-status">Trạng thái</th>
              <th scope="col" className="th-action">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <ProductItem />
            <ProductItem />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;