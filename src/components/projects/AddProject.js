import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "", save: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("http://localhost:5000/api/projects", { title, description }, {withCredentials:true})
    .then( () => {
        //this.props.getData();
        this.setState({title: "", description: "", save: true});
        this.props.history.push('/projects');
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(

      <div className="project-list-style container">
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;