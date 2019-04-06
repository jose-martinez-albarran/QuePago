import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ProjectList from "./components/projects/ProjectList";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import ProjectDetails from "./components/projects/ProjectDetails";
import Signup from "./components/auth/Signup";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import ProtectedRoute from './components/auth/protected-route';
import ServicesList from './components/projects/ServicesList'
import AddProject from './components/projects/AddProject';
import UserPage from './components/user/UserPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    {this.fetchUser()}
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch>
            <Route exact path='/' render={() => <Home userInSession={this.state.loggedInUser} getUser={this.getTheUser} />}/>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path='/projects' component={ProjectList} />
            <ProtectedRoute user={this.state.loggedInUser} path='/addproject' component={AddProject} />
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
            <Switch> 
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
              <Route exact path='/' render={() => <Home />}/>
              <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />
              <ProtectedRoute user={this.state.loggedInUser} path='/projects' component={ProjectList} />
            </Switch>
          <Footer />
        </div>
      );
    }
  }
}
export default App;
