import React, { Component } from "react"
import "./Animal.css"
import dog from "./dog.png"


export default class Animal extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <img src={ dog } className="icon--dog" />
                        <h4 className="card-title">{ this.props.animal.name }</h4>
                        <h6 className="card-type">{ this.props.animal.type }</h6>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteAnimal(this.props.animal.id)
                                    )
                                }
                            }
                            disabled={ this.state.saveDisabled }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}