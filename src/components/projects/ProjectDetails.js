import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditProject from './EditProject';

class ProjectDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getSingleProject();
  }

  getSingleProject = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/projects/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
      const theProject = responseFromApi.data;
      this.setState(theProject);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProject();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
    }
  }

// DELETE PROJECT:
  deleteProject = (id) => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/projects/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
        this.props.history.push('/projects'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  ownershipCheck = (project) => {
    if(this.props.loggedInUser && project.owner == this.props.loggedInUser._id){
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button onClick={() => this.deleteProject(this.state._id)}>Delete project</button>
        </div>
      )
    } 
  }
  
  render(){
    return(
      <div className="project-list-style ">
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div >
          {this.ownershipCheck(this.state)}
        </div>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default ProjectDetails;