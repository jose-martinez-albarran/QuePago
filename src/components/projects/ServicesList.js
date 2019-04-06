import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddProject from './AddProject';

class ServicesList extends Component {
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

  render(){
    return(
      <div className="ServicesUserSection"> 
        <div>
            <AddProject getData={() => this.getAllProjects()}/>
        </div>
        <div>
          { this.state.listOfProjects.map((project, index) => {
            return (
              <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                </Link>
                <p style={{maxWidth: '400px'}} >{project.description} </p>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default ServicesList;