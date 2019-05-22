import React, { Component } from "react"

export default class SearchResults extends Component {

    filterResults = (input) => {
        let resultsArray = []
        fetch(`http://localhost:5002/animals?title_like=${input}`)
            .then(results => results.json())
            .then(animalResults => resultsArray.push(animalResults))
            .then(() => fetch(`http://localhost:5002/employees?title_like=${input}`))
            .then(results => results.json())
            .then(employeeResults => resultsArray.push(employeeResults))
            .then(() => fetch(`http://localhost:5002/locations?title_like=${input}`))
            .then(results => results.json())
            .then(locationResults => resultsArray.push(locationResults))
    }

    getUserInput = () => {
    //let input = input;
    }

    displayResults = () => {
        this.props.history.push('/search')
    }

    render() {
        return (
            <h1>Results</h1>
        )
    }
}