import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="nav justify-content-start">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products</a>
        </li>
      </ul>
      <hr></hr>
      <div className="container">
        <div className="text-center mt-3">
          <h1 className="heading">Trang Quản lý sản phẩm</h1>
        </div>

        <div className="row mt-3">
          <div className="col-12">
            <button className="btn btn-primary btn-add">
              Thêm mới
          </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-hover mt-3">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
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
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <label className="badge badge-danger">
                      Hết hàng
                    </label>
                  </td>
                  <td>
                    <button className="btn btn-action btn-info">Sửa</button>
                    <button className="btn btn-action btn-warning">Xoá</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
