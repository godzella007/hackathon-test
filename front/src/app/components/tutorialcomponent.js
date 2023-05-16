import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTutorial, deleteTutorial } from "../slices/tutorials";
import TutorialDataService from "../services/tutorial.service";
import { withRouter } from '../common/with-router';


class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeNumbre_Equipe = this.onChangeNumbre_Equipe.bind(this);
    this.onChangeNomEntriprise = this.onChangeNomEntriprise.bind(this);
    this.onChangeDate_début = this.onChangeDate_début.bind(this);
    this.onChangeDate_fin = this.onChangeDate_fin.bind(this);
    this.onChangeRules = this.onChangeRules.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeTutorial = this.removeTutorial.bind(this);

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
      message: "",
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        title: title,
      },
    }));
  }
  

  onChangeDescription(e) {
    const Description = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: Description,
      },
    }));
  }
  onChangeNomEntriprise(e) {
    const NomEntriprise = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        NomEntriprise: NomEntriprise,
      },
    }));
  }
  onChangeNumbre_Equipe(e) {
    const Numbre_Equipe = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Numbre_Equipe: Numbre_Equipe,
      },
    }));
  }
  onChangeDate_début(e) {
    const Date_début = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Date_début: Date_début,
      },
    }));
  }
  onChangeDate_fin(e) {
    const Date_fin = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        
        Date_fin: Date_fin,
      },
    }));
  }
  onChangeRules(e) {
    const Rules = e.target.value;
  
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        Rules: Rules,
      },
    }));
  }
  getTutorial(id) {
    TutorialDataService.get(id)
      .then((response) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status,
    };

    this.props
      .updateTutorial({ id: this.state.currentTutorial.id, data })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
        }));

        this.setState({ message: "The status was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateContent() {
    this.props
      .updateTutorial({ id: this.state.currentTutorial.id, data: this.state.currentTutorial })
      .unwrap()
      .then((reponse) => {
        console.log(reponse);
        this.setState({ message: "The Project was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  removeTutorial() {
    this.props
      .deleteTutorial({ id: this.state.currentTutorial.id })
      .then(() => {
        this.props.router.navigate('/tutorials');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div className="container mt-3">      
      
      <div className="content-body">
        {currentTutorial ? (
        
        <div className="card">
        <div className="card-header">
            <h4 className="card-title">Ajouter Hackathon</h4>
        </div>
            <div className="card-body">
                                <div className="basic-form">
            <div className="row">
                                            <div className="mb-3 col-md-6">
                <label htmlFor="title">l'Entriprise</label>
                <input
  type="text"
  className="form-control"
  id="NomEntriprise"
  value={this.state.currentTutorial.NomEntriprise}
  onChange={this.onChangeNomEntriprise}
/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Title de Projet</label>
                <input
  type="text"
  className="form-control"
  id="title"
  value={this.state.currentTutorial.title}
  onChange={this.onChangeTitle}
/>

              </div>
              </div>
              <div className="row">
                 <div className="mb-3 col-md-6">
                <label htmlFor="Numbre_Equipe">Numbre_Equipe</label>
                <input
  type="text"
  className="form-control"
  id="Numbre_Equipe"
  value={this.state.currentTutorial.Numbre_Equipe}
  onChange={this.onChangeNumbre_Equipe}
/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="NomEntriprise">Description de Projet</label>
                <input
  type="text"
  className="form-control"
  id="description"
  value={this.state.currentTutorial.description}
  onChange={this.onChangeDescription}
/>
              </div>
              </div>
              <div className="row">
                                            <div className="mb-3 col-md-6">
                <label htmlFor="Date_début">Date_début</label>
                <input
  type="Date"
  className="form-control"
  id="Date_debut"
  value={this.state.currentTutorial.Date_début}
  onChange={this.onChangeDate_début}
/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor=" Date_fin"> Date_fin</label>
                <input
  type="Date"
  className="form-control"
  id="Date_fin"
  value={this.state.currentTutorial.Date_fin}
  onChange={this.onChangeDate_fin}
/>
              </div>
              </div>
              <div className="row">
                                            <div className="mb-3 col-md-6">
                <label htmlFor="Rules"> Rules</label>
                <input
  type="text"
  className="form-control"
  id="Rules"
  value={this.state.currentTutorial.Rules}
  onChange={this.onChangeRules}
/>              
                         </div>
              </div>
              <div className="form-group col-md-6">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
           </div>

           
           </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateContent}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div></div>
    );
  }
}

export default connect(null, { updateTutorial, deleteTutorial })(withRouter(Tutorial));
