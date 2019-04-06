import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  
  render(){
    return(
      <div className="loginPage row justify-content-sm-center">
        <form  className="col-sm-6" onSubmit={this.handleFormSubmit}>
        <div className="form-group"> 
          <label><h3>Usuario:</h3></label>
          <input type="text" name="username" className="form-control"  placeholder="Usuario" value={this.state.username} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="form-group"> 
          <label><h3>Contraseña:</h3></label>
          <input name="password"  type="password" value={this.state.password} className="form-control"  placeholder="Contraseña" onChange={ e => this.handleChange(e)} />
        </div>
          <input type="submit" value="Registrarse" className="btn btn-primary"/>
          <p>¿Ya te encuentras registrado? 
            <Link to={"/login"}> ¡Ingresar!</Link>
        </p>
        </form>
  

  
      </div>
    )
  }
}

export default Signup;