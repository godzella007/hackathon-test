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
class Formulair extends Component {
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
   
    const { tutorials } = this.props;

    return (
      <>
 <div className="content-body">
    <div className="container-fluid">
  
        <div className="row ">
            <div className="col-xl-12">
                <div className="card h-auto">
                    <div className="card-body py-0">
                       <div className="row ">
                            
                            <div className="col-lg-10 col-xxl-9">
                                <div className="email-right-box">
                                {tutorials &&
              tutorials.map((tutorial) => (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="right-box-padding p-12">
                                                <div className="read-wapper dz-scroll" id="read-content">
                                                    <div className="read-content">
                                                        <div className="media pt-3 d-sm-flex d-block justify-content-between">
                                                            <div className="clearfix mb-3 d-flex">
                                                                <img className="me-3 rounded" width="70" height="70" alt="image" src="DH.png"/>
                                                                <div className="media-body me-2">
                                                                    <h5 className="text-primary mb-0 mt-1">{tutorial.NomEntriprise}</h5>
                                                                    <p className="mb-0">NomEntriprise</p>
                                                                </div>
                                                            </div>
                                                          
                                                        </div>
                                                        <hr/>
                                                        <div className="media mb-2 mt-3">
                                                            <div className="media-body"><span className="pull-end">Title de Projet</span>
                                                                <h5 className="my-1 text-primary">{tutorial.title}</h5>
                                                                <hr/>        
                                                                <p className="text-end"><strong>Date de Projet :</strong></p>
                                                                <p className="text-end">
                                                                Date début : {tutorial.Date_début}</p>
                                                                <p className="text-end">
                                                                Date Fin : {tutorial.Date_fin}</p>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <div className="read-content-body">
                                                            
                                                            <p className="mb-2"><strong>Description de Projet :</strong> {tutorial.description}</p>
                                                         <hr/>
                                                        </div>
                                                        <p className="mb-2"><strong>Membre de Projet :</strong> {tutorial.Numbre_Equipe}</p>
                                                        <hr/>
                                                     
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to={"/back"}>
                                                        <button className="btn btn-primary " type="button">Send</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  ))}
                                </div>
                            </div>
                       </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

   </>
      
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
})(Formulair);
