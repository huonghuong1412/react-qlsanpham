import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import routes from './routes'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <hr></hr>
          <div className="container">
            <div className="row mt-3">
              {/* <div className="col-12">
              <button className="btn btn-primary btn-add">
                Thêm mới
              </button>
            </div>
            <div className="col-12">
              <Products />
            </div> */}
              {this.showMenuNavbar(routes)}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  showMenuNavbar = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((item, index) => {
        return <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        ></Route>
      })
    }
    return <Switch>
      {result}
    </Switch>
  }
}

export default App;
