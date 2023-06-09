import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../slices/tutorials";
import { Link } from "react-router-dom";

class ViewAdmin extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.findByTitle = this.findByTitle.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);

    this.state = {
      currentTutorial: null,
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

  findByTitle() {
    this.refreshData();

    this.props.findTutorialsByTitle({ title: this.state.searchTitle });
  }

  render() {
    const {currentTutorial, currentIndex } = this.state;
    const { tutorials } = this.props;

    return (
		<div className="container mt-3">
      <div className="content-body">
      <div className="list row">
     
        <div className="col-md-6">
          <h4>List de ajouter </h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

         
        </div>
       <br/>
	   
        <div className="col-md-8">
          {currentTutorial ? (
           <div>
           <h4 >hackathons ajouter</h4>
           <div>
             <label>
               <strong>Nom de Entriprise :</strong>
             </label>{" "}
             {currentTutorial.NomEntriprise}
           </div>
           <div>
             <label>
               <strong> Title de Projet:</strong>
             </label>{" "}
             {currentTutorial.title}
           </div>
           <div>
             <label>
               <strong>Number de Equipe :</strong>
             </label>{" "}
             {currentTutorial.Numbre_Equipe}
           </div>

           <div>
             <label>
               <strong>Description de Projet:</strong>
             </label>{" "}
             {currentTutorial.description}
           </div>
       
           <div>
             <label>
               <strong>Date début :</strong>
             </label>{" "}
             {currentTutorial.Date_début}
           </div>
           <div>
             <label>
               <strong>Date fin :</strong>
             </label>{" "}
             {currentTutorial.Date_fin}
           </div>
           <div>
             <label>
               <strong>Rules :</strong>
             </label>{" "}
             {currentTutorial.Rules}
           </div>
         </div>
         
       ) : (
         <div>
           <br />
           <p>Please click on a Projet.</p>
         </div>
       )}
     </div></div>
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
})(ViewAdmin);
