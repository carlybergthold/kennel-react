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
                        <img src={ employee } className="icon--employee" alt="employee"/>
                        <h4 className="card-title">{ this.props.employee.name }</h4>
                        {/* DELETE BUTTON */}
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
                            {/* EDIT BUTTON */}
                            <button type="button" className="delete-emp-btn"
                            onClick={() => {
                                this.props.history.push(`/employees/${this.props.employee.id}/edit`);
                            }} >Edit
                            </button>
                    </div>
                </div>
            </section>
        )
    }
}