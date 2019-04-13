import React, { Component } from 'react';
import axios from 'axios';

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.theProject.title, 
        description: this.props.theProject.description,
        telephone: this.props.theProject.telephone,
        email: this.props.theProject.email,
        account: this.props.theProject.account,
        status: this.props.theProject.status,
        service: this.props.theProject.service
    }
  }

    
  handleFormSubmit = (event) => {
    const title = this.state.title;
    const description = this.state.description;
    const  telephone = this.state.telephone;
  const email = this.state.email;
  const account = this.state.account;
  const status = this.state.status;
  const service = this.state.service;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/projects/${this.props.theProject._id}`, { title, description, service, telephone, email, account ,status }, {withCredentials:true})
    .then( () => {
        this.props.getTheProject();
        // after submitting the form, redirect to '/projects'
        this.props.history.push('/services');    
    })
    .catch( error => console.log(error) )
  }

  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }

  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }

  render(){
    return (
      <div className="project-list-style container">
        <hr />
        <h3>Edita información del servicio</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Identificador:</label>
          <input type="text" name="title"  className="form-control" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          <label>Descripción:</label>
          <textarea name="description" className="form-control" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          
          <input className="btn btn-success form-control agregar" type="submit" value="Guardar" />
        </form>
      </div>
    )
  }
}

export default EditProject;