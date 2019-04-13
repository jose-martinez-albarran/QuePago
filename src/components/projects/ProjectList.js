import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
 

class ProjectList extends Component {
  constructor(){
      super();
      this.state = { listOfProjects: [] };
  }

  getAllProjects = () =>{
    axios.get(`${process.env.REACT_APP_API_URL}/projects`, {withCredentials:true})
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
                    <Link to={`/services/${project._id}`}>
                      <h3>{project.service}</h3>
                    </Link>
                    <p>{project.title}</p>
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
        <Link to='/addservice' className="col-lg-12 btn btn-success btn-agregar"><h1>AGREGA UN SERVICIO</h1></Link>
      </div>
      {this.ownershipCheck(this.state)}
        <div >
        <div>
            <h1 className="text-center col-lg-12 code-qr">TU CÓDIGO</h1>
            <div className="col-lg-12">
            
            </div>
        </div>
        <div>
        <QRCode value="www.record.com.mx"></QRCode>    
        </div>
              
        </div>
      </div>
    )
  }
}

export default ProjectList;