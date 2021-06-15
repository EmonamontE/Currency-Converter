import React from 'react'
import Home from "./Home"
import Converter from "./Converter"
import Exchange from "./Exchange"
import Settings from "./Settings"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom"

class Layout extends React.Component {
  render() {
    return(
      <Router>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center mb-1 text-white text-decoration-none"
              >
                <span className="fs-4">Exchange Manager</span>
              </Link>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link
                    to="/converter"
                    className="nav-link ms-4 px-2 text-secondary"
                  >
                    Конвертер
                  </Link>
                </li>
                <li>
                  <Link
                    to="/exchange"
                    className="nav-link px-2 text-secondary"
                  >
                    Курсы валют
                  </Link>
                </li>
              </ul>
              <div className="text-end">
                <Link
                  to="/settings"
                  type="button"
                  className="btn btn-outline-light me-2"
                >
                  Настройки
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route 
              exact path='/'
              component={Home}
            />
            <Route 
              path='/converter'
              component={Converter}
            />
            <Route 
              path='/exchange'
              component={Exchange}
            />
            <Route 
              path='/settings'
              component={Settings}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Layout;
