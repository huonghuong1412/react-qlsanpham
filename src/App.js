import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row mt-4">
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
