import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './kennel/AnimalList'
import LocationList from './kennel/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import SearchResults from './nav/SearchResults';
import Animal from './kennel/AnimalDetail';
import { withRouter } from 'react-router'
import EmployeeDetail from './employee/EmployeeDetail';
import LocationDetail from './kennel/LocationDetail';


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    deleteAnimal = (id) => {
        let newState = {}
        AnimalManager.deleteAnimal(id)
        .then(AnimalManager.getAll)
        .then(animals => {newState.animals = animals})
        .then(() => {
            this.props.history.push("/animals")
            this.setState(newState)
        })
    }

    deleteEmployee = (id) => {
        let newState = {}
        EmployeeManager.deleteEmployee(id)
        .then(EmployeeManager.getAll)
        .then(employees => {newState.employees = employees})
        .then(() => {
            this.props.history.push("/employees")
            this.setState(newState)
        })
    }

    componentDidMount() {
        let newState = {}
        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")).then(e => e.json())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners}
                                                            deleteAnimal={this.deleteAnimal} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                // Find the animal with the id of the route parameter
                let animal = this.state.animals.find(animal =>
                    animal.id === parseInt(props.match.params.animalId)
                )
                // If the animal wasn't found, create a default one
                if (!animal) {
                    animal = {id:404, name:"404", breed: "Dog not found"}
                }
                return <Animal animal={ animal }
                    deleteAnimal={ this.deleteAnimal } />
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                // Find the animal with the id of the route parameter
                let employee = this.state.employees.find(employee =>
                    employee.id === parseInt(props.match.params.employeeId)
                )
                if (!employee) {
                    employee = {id:404, name: "Employee not found"}
                }
                return <EmployeeDetail employee={ employee }
                            deleteEmployee={ this.deleteEmployee } />
               }} />

                <Route path="/locations/:locationId(\d+)" render={(props) => {
                let location = this.state.locations.find(location =>
                    location.id === parseInt(props.match.params.locationId)
                )
                if (!location) {
                    location = {id:404, name: "Location not found"}
                }
                return <LocationDetail location={ location } />
                }} />
            </>
        )
    }
}

export default withRouter(ApplicationViews)
