import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
  deleteTutorial,
} from "../slices/tutorials";
import { Link } from "react-router-dom";
import TutorialDataService from "../services/tutorial.service";
class ListeAdmin extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeTutorial = this.removeTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
   

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        Numbre_Equipe:"",
        NomEntriprise:"",
        Date_début:"",
        Date_fin:"",
        Rules:"",
        published: false,
      },
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }
  removeAllTutorials() {
    this.props
      .deleteAllTutorials()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  removeTutorial(id) {
  
    TutorialDataService.delete(id)
      .then(() => {
       window.location.reload()
      })
      .catch((e) => {
        console.log(e);
      });
  }
  findByTitle() {
    this.refreshData();

    this.props.findTutorialsByTitle({ title: this.state.searchTitle });
  }

  render() {
    const { searchTitle } = this.state;
    const { tutorials } = this.props;

    return (
    
      <div className="content-body">
      <div className="page-titles">
      <ol className="breadcrumb">
        <li className=""><a href="">Hacktons--- /</a></li>
        <li className="breadcrumb-item active"><a href="">list</a></li>
      </ol>
            </div>

            <div className="container-fluid">  
             
<div className="element-area">
      <div className="demo-view">
        <div className="container-fluid pt-0 ps-0 pe-lg-0 pe-0">
  
        <div className="col-xl-12">
          <div className="card dz-card" id="accordion-three">
            <div className="card-header flex-wrap d-flex justify-content-between">
            <div className="col-md-0">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title"
          value={searchTitle}
          onChange={this.onChangeSearchTitle}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.findByTitle}
          >
            Search
          </button>
        </div>
      </div>
    </div>
            
            </div>
             
            
              <div className="tab-content" id="myTabContent-2">
                <div className="tab-pane fade show active" id="withoutSpace" role="tabpanel" aria-labelledby="home-tab-2">
                   <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table id="example3" className="display table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Nom de Entriprise</th>
                            <th>Title de Projet</th>
                            <th>Number de Equipe </th>
                            <th>Description de Projet</th>
                            <th>Date début</th>
                            <th>Date fin</th>
                            <th>Rules</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {tutorials &&
          tutorials.map((tutorial) => (
                          <tr>
                            <td><img className="rounded-circle" width="35" src="images/profile/small/pic1.jpg" alt=""/></td>
                            <td> {tutorial.NomEntriprise}</td>
                            <td>{tutorial.title}</td>
                            <td>{tutorial.Numbre_Equipe}</td>
                            <td>{tutorial.description}</td>
                            <td>{tutorial.Date_début}</td>
                            <td>{tutorial.Date_fin}</td>
                            <td>{tutorial.Rules}</td>
                            <td>
                              <div class="dropdown ms-auto text-end c-pointer">
															<div class="btn-link" data-bs-toggle="dropdown">
																<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg>
															</div>
															<div class="dropdown-menu dropdown-menu-end">
                              <div class="col-xl-3 col-xxl-4 col-lg-4 col-md-6">
                        
             
                    </div>
                    
                              <Link to={"/tutorials/" + tutorial.id} class="dropdown-item">Accept Patient</Link>
                              <Link to={"/formulair"} class="dropdown-item">View Details</Link>
                              <Link  onClick={()=>{this.removeTutorial(tutorial.id)}} class="dropdown-item" >Supprime</Link>
																
															</div>
														</div>												
                            </td>		
                                   
                          </tr>
                          ))}
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              
              </div>
          
             
          </div>
        </div>
               
        </div>   				</div>       
            


</div>
  
</div></div>


      
 );
}

}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
  deleteTutorial,
})(ListeAdmin);
