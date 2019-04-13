import React, { Component } from 'react';
import Radio from './Radio';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "", service: "",telephone: "", email: "", account:"", status:"", save: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const  telephone = this.state.telephone;
  const email = this.state.email;
  const account = this.state.account;
  const status = this.state.status;
  const service = this.state.service;
    console.log(this.state)
    axios.post("http://localhost:5000/api/projects", { title, description, service, telephone, email, account ,status}, {withCredentials:true})
    .then( () => {
        //this.props.getData();
        this.setState({title: "", description: "", service: "", telephone: "", email: "", account:"", status:"",  save: true});
        this.props.history.push('/projects');
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  changeHandler = event => {
    this.setState({
      service: event.target.value
    });
    console.log(this.state);
  }


  serviceSelect1 = () => {
    
    if(this.state.service == "cfe"){
      return (
        <form onSubmit={this.handleFormSubmit}>
                  <label >Identificador:</label>
          <input type="text" name="title" className="form-control" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>Cuenta:</label>
          <input type="number" name="account"  maxLength="11"  className="form-control" value={this.state.account} onChange={ e => this.handleChange(e)}/>
          <label>Correo:</label>
          <input type="email" name="email"   className="form-control" value={this.state.email} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="AGREGAR"  className=" form-control agregar btn btn-success"/>
        </form>
      )
    } 
  }

  serviceSelect2 = () => {

    if(this.state.service == "totalplay"){
      return (
        <form onSubmit={this.handleFormSubmit}>
                  <label >Identificador:</label>
          <input type="text" name="title" className="form-control" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>Cuenta:</label>
          <input type="number" name="account"  maxLength="11"  className="form-control" value={this.state.account} onChange={ e => this.handleChange(e)}/>
          <label>Correo:</label>
          <input type="email" name="email"   className="form-control" value={this.state.email} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="AGREGAR"  className=" form-control agregar btn btn-success"/>
        </form>
      )
    } 
  }

  serviceSelect3 = () => {
   
    if(this.state.service == "att"){
      return (
        <form onSubmit={this.handleFormSubmit}>
                  <label>Identificador:</label>
          <input type="text" name="title" className="form-control" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>Teléfono:</label>
          <input type="number" name="telephone"  maxLength="11"  className="form-control" value={this.state.telephone} onChange={ e => this.handleChange(e)}/>
          <label>Descripción:</label>
          <input name="description" value={this.state.description} className="form-control" onChange={ e => this.handleChange(e)} />
          <input type="submit" value="AGREGAR" className=" form-control agregar btn btn-success" />
        </form>
      )
    } 
    console.log(this.state);
  }

  render(){
    return(
      <div className="project-list-style container">

      
      <form>
      <label className="mr-sm-2" ><h2>Seleccione el servicio que desea agregar:</h2></label>
<select name="service"  value={this.state.service}  className="form-control" onChange={this.changeHandler} >
<option selected>Seleccione el servicio</option>
  <option value="att">ATT</option>
  <option value="totalplay">TOTALPLAY</option>
  <option value="cfe">CFE</option>
</select>
</form>

        <form onSubmit={this.handleFormSubmit}>

        </form>

        <div className="agregar-servicio">   {this.serviceSelect1(this.state)}</div>
        <div>   {this.serviceSelect2(this.state)}</div>
        <div>   {this.serviceSelect3(this.state)}</div>
        <Link to={"/services"} className='btn btn-secondary links-login'>Regresar a Servicios</Link>
      </div>
    )
  }
}

export default AddProject;