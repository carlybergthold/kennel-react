import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './kennel/LocationList'
import EmployeeList from './employee/EmployeeList'
import AnimalManager from "./API/AnimalManager"
import EmployeeManager from "./API/EmployeeManager"
import LocationManager from "./API/LocationManager"
import SearchResults from './nav/SearchResults';
import Animal from './animal/AnimalDetail';
import { withRouter } from 'react-router'
import EmployeeDetail from './employee/EmployeeDetail';
import LocationDetail from './kennel/LocationDetail';
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';
import EmployeeEditForm from './employee/EmployeeEditForm'
import Login from './authentication/Login';


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

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

    addAnimal = (animal) => {
        AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({ animals: animals}))
        .then(() => this.props.history.push("/animals"))
    };

    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
        .then(() => AnimalManager.getAll())
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })
    };

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
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} {...props}
                                        deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/search" render={(props) => {
                    return <SearchResults />
                }} />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                // Find the animal with the id of the route parameter
                let animal = this.state.animals.find(animal =>
                    animal.id === parseInt(props.match.params.animalId)
                )
                // If the animal wasn't found, create a default one
                if (!animal) {
                    animal = {id:404, name:"404", type: "Dog not found"}
                }
                return <Animal animal={ animal } employees={ this.state.employees }
                    deleteAnimal={ this.deleteAnimal } />
                }} />

                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                }}
                />

                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
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

                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} employees={this.state.employees} updateEmployee={this.updateEmployee}/>
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
