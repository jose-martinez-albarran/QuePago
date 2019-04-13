import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' , LoginMain: false};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "" , LoginMain: true});
        this.props.getUser(response);
        console.log(this.props.getUser(response));
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    console.log(this.state.LoginMain)

    if(this.state.LoginMain === false){
      return(
        <div className="loginPage row justify-content-sm-center">
          <form  className="col-sm-6" onSubmit={this.handleFormSubmit}>
            <div className="form-group"> 
            <label><h3>Usuario:</h3></label>
            <input type="text" name="username" className="form-control" placeholder="Usuario" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className="form-group">
            <label><h3>Contraseña:</h3></label>
            <input name="password"  type="password" className="form-control" placeholder="Contraseña" value={this.state.password} onChange={ e => this.handleChange(e)} />
            </div>
            <input type="submit" value="Ingresar" className="btn btn-primary"/>
            <p>¿No te encuentras Registrado? 
              <Link to={"/signup"}> ¡Registrarse!</Link>
          </p>
          </form>
        </div>
      )
    } else {
      return(
        <div className="loginPage">
         <Link to={"/projects"} className='col-lg-10 btn btn-secondary links-login'><h1>SERVICIOS</h1></Link>
         <Link to='/addproject' className="col-lg-10 btn btn-success btn-agregar links-login"><h1>AGREGA UN SERVICIO</h1></Link>
      </div>
      )
    }

  }
}

export default Login;


