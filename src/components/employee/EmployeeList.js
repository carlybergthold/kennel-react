import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import employeeImg from './employee.png'
import "./employee.css"


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h1>Employees</h1>
                <section className="employees-container">

            {
                this.props.employees.map(employee =>
                    <div className="card-body employee-article" key={employee.id}>
                        <img src={ employeeImg } className="icon--employee" />
                        <h3>{employee.name}</h3>
                        <Link className="see-employee-link" to={`/employees/${employee.id}`}>More About {employee.name}</Link>
                    </div>
                )
            }
            </section>
            </section>
        )
    }
}

export default EmployeeList