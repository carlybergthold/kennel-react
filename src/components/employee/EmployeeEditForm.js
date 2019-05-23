import React, { Component } from "react"

export default class EmployeeEditForm extends Component {
    // Set initial state
    // state = {
    //   animalName: "",
    //   breed: "",
    //   employeeId: ""
    // }


//     handleFieldChange = evt => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     updateExistingAnimal = evt => {
//       evt.preventDefault()

//       if (this.state.employee === "") {
//         window.alert("Please select a caretaker");
//       } else {
//         const editedAnimal = {
//           id: this.props.match.params.animalId,
//           name: this.state.animalName,
//           breed: this.state.breed,
//           employeeId: parseInt(this.state.employeeId)
//         };

//     this.props.updateAnimal(editedAnimal)
//     .then(() => this.props.history.push("/animals"))      
//     }
//   }

//     componentDidMount() {
//       AnimalManager.get(this.props.match.params.animalId)
//       .then(animal => {
//         this.setState({
//           animalName: animal.name,
//           breed: animal.breed,
//           employeeId: animal.employeeId
//         });
//       });
//     }


    render() {
      return (
       <p>hi</p>
      );
    }
}