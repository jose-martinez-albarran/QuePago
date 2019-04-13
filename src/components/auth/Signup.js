import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' , name: '', email:''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const email = this.state.email;
  
    this.service.signup(username, password, name, email)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            name: "",
            email: ""
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
        <div className="form-group"> 
          <label><h3>Nombre:</h3></label>
          <input name="text"  type="name" value={this.state.name} className="form-control"  placeholder="Nombre" onChange={ e => this.handleChange(e)} />
        </div>
        <div className="form-group"> 
          <label><h3>Correo:</h3></label>
          <input name="text"  type="email" value={this.state.email} className="form-control"  placeholder="Correo" onChange={ e => this.handleChange(e)} />
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