import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/auth-service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <header className="header fixed-top">
            <div className="navbar">
            <div className="col-sm-2">
              <h1 className="site-title">
              <Link to="/" style={{ textDecoration: 'none' }}>
                  QuéPago
                  </Link>
              </h1>
            </div>
            <div className="col-sm-8 ">
              <div className="navbar navbar-expand-lg justify-content-end">
                <ul className="navbar-nav nav-list-color">
                  <li className="nav-item ">
                    <img  className="account-img" src={this.state.loggedInUser.picture} alt="icono"/>
                  </li>
                  <li className="nav-item"> 
                    <a className="nav-link home-co" href="#">{this.state.loggedInUser.username}</a>
                  </li>
                  <li className="nav-item">
                    <Link to="/">
                      <button className="btn btn-info btn-lg" onClick={() => this.logoutUser()}>Salir</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </header>
        </div>
      );
    } else {
      return (
        <div>
          <header className="header fixed-top">
            <div className="navbar">
              <div className="col-sm-2">
                <h1 className="site-title">

                  <Link to="/" style={{ textDecoration: 'none' }}>
                  QuéPago
                  </Link>
                </h1>
              </div>
              <div className="col-sm-8 ">
                <div className="navbar navbar-expand-lg justify-content-end">
                  <ul className="navbar-nav nav-list-color">
                    <li className="nav-item">
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        Ingresar
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" style={{ textDecoration: "none" }}>
                        Registrarse
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    }
  }
}

export default Navbar;