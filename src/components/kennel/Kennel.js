import React, { Component } from "react"
import NavBar from "../nav/navBar"
import ApplicationViews from "../ApplicationViews"

import "./kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchResults from "../nav/SearchResults";


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel