import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './kennel/AnimalList'
import LocationList from './kennel/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import SearchResults from './nav/SearchResults';


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
        .then(animals => newState.animals = animals)
        .then(() => this.setState(newState))
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
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners}
                                                            deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults />
                }} />
            </>
        )
    }
}

export default ApplicationViews

