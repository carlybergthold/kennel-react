import React, { Component } from "react"
import "./employee.css"
import employee from "./employee.png"


export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employee">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body employee-article">
                        <img src={ employee } className="icon--employee" />
                        <h4 className="card-title">{ this.props.employee.name }</h4>
                        <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteEmployee(this.props.employee.id)
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