import React, { Component } from "react"
import location from './location.svg'
import './location.css'


export default class LocationDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="location">
                <div key={ this.props.location.id } className="card">
                    <div className="card-body">
                        <img src={ location } className="icon--location" alt="location"/>
                        <h4 className="card-title">{ this.props.location.name }</h4>
                    </div>
                </div>
            </section>
        )
    }
}