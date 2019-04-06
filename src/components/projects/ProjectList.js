import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddProject from './AddProject';

class ProjectList extends Component {
  constructor(){
      super();
      this.state = { listOfProjects: [] };
  }

  getAllProjects = () =>{
    axios.get(`http://localhost:5000/api/projects`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProjects();
  }

  ownershipCheck = (project) => {
    console.log(this.state)
   
      return (
        <div className="row">
          { this.state.listOfProjects.map((project, index) => {
             if(this.props.loggedInUser && project.owner == this.props.loggedInUser._id)
            return (
              <div className="card col-sm-5 card-services" key={project._id}>
                 <div className="card-body">
                    <Link to={`/projects/${project._id}`}>
                      <h3>{project.title}</h3>
                    </Link>
                    <p>{project.description}</p>
                 </div>
              </div>
            )})
          }
        </div>
      )
   
  }

  render(){
    return(
      <div className="project-list-style container">
      <div className="user-section1-btn-agregar">
        <Link to='/addproject' className="col-lg-12 btn btn-success btn-agregar"><h1>AGREGA UN SERVICIO</h1></Link>
      </div>
      {this.ownershipCheck(this.state)}
        <div >
        <div>
            <h1 className="text-center col-lg-12 code-qr">TU CÓDIGO</h1>
            <div className="col-lg-12">
            <img className="mx-auto d-block" height="200px" src="https://smallbiztrends.com/wp-content/uploads/2015/05/qr-code-sample.jpg" alt="qr" />
            </div>
        </div>        
        </div>
      </div>
    )
  }
}

export default ProjectList;