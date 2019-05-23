import React, { Component } from "react"
import AnimalManager from "../API/AnimalManager"

export default class AnimalEditForm extends Component {
    // Set initial state
    state = {
      name: "",
      type: "",
      employeeId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
      evt.preventDefault()

      if (this.state.employee === "") {
        window.alert("Please select a caretaker");
      } else {
        const editedAnimal = {
          id: this.props.match.params.animalId,
          name: this.state.name,
          type: this.state.type,
          employeeId: parseInt(this.state.employeeId)
        };

    this.props.updateAnimal(editedAnimal)
    // .then(() => this.props.history.push("/animals"))
    }
  }

    componentDidMount() {
      AnimalManager.get(this.props.match.params.animalId)
      .then(animal => {
        this.setState({
          name: animal.name,
          type: animal.type,
          employeeId: animal.employeeId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="animalForm">
            <div className="form-group">
              <label htmlFor="name">Animal name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value = {this.state.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="type"
                value = {this.state.type}
              />
            </div>
            <div className="form-group">
              <label htmlFor="employee">(Re)assign to caretaker</label>
              <select
                name="employee"
                id="employeeId"
                onChange={this.handleFieldChange}
                value = {this.state.employeeId}
              >
                <option value="">Select an employee</option>
                {this.props.employees.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={this.updateExistingAnimal}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}