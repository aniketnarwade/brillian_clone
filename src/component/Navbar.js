import React from 'react';
import {Link} from "react-router-dom";

let NavBar = () => {
  return(
      <React.Fragment>
          <nav className="navbar navbar-light bg-white ">
              <div className="container">

                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <Link className="navbar-brand " to="/">

                              <h4 className="text-uppercase">
                                  <i className="fas fa-globe mr-1"/>
                                  brilliant</h4>
                          </Link>
                  <ul className="navbar-nav d-flex flex-row mr-5 mb-lg-0 ">
                      <li className="nav-item mr-5 ">
                          <a className="nav-link" href="#">Today</a>
                      </li>
                      <li className="nav-item mr-5">
                          <a className="nav-link" href="#">Course</a>
                      </li>
                      <li className="nav-item">
                          <Link to="/puzzle-practice" className="nav-link mr-5">Practice</Link>

                      </li>
                      <li className="nav-item">
                          <input type="text" placeholder="Serach Here" className="serchhere"/>
                      </li>
                  </ul>
                  <button className="btn btn-sm btn-outline-primary btn-circle text-uppercase " >Login</button>
                  <button className="btn btn-sm btn-primary text-white btn-circle text-uppercase " >sign up</button>

              </div>
          </nav>
      </React.Fragment>
  )
};

export default NavBar;