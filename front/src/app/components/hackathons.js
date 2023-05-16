
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../slices/tutorials";
import { Link } from "react-router-dom";

class Hackathons extends Component {
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
   
    const { tutorials } = this.props;
   
    return (
     
      <div className="content-body">
    
  
            <div className="container-fluid">  
  <div className="row ">

  {tutorials &&
              tutorials.map((tutorial) => (
  <div className="col-xl-3 col-sm-6">
						<div className="card box-hover ">
							<div className="card-header">
              <span>Title de Projet</span>	
              <h5 className="text-primary mb-0 mt-1 text-end" >{tutorial.title}</h5>
							</div>
							<div className="card-body">
							
								
										<span className="mb-2">NomEntriprise:</span>	
                    <h6 className="text-end">{tutorial.NomEntriprise}</h6>
							
								
							</div>
							<div className="card-footer d-flex justify-content-between flex-wrap">
								<Link to={"/formulair"}>
								<button className="my-3"  >Ouvrir</button></Link>
							</div>
						</div>
					</div>
            ))}
            
    </div></div></div>
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
})(Hackathons);
