import React, { Component } from "react"
import "./Login.css"


export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        checked: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleCheckboxChange = (e) => {
        this.setState({ checked: e.target.checked })
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        if (this.state.checked) {
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
        )} else {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        }
    }

    render() {
        return (
            <article className="login-container">
                <form onSubmit={this.handleLogin} className="login-form">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail">
                        Email address
                    </label>
                    <input onChange={this.handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <label htmlFor="inputPassword">
                        Password
                    </label>
                    <input onChange={this.handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <button type="submit">
                        Sign in
                    </button>
                    <label>
                        Remember Me
                        <input
                            name="rememberMe"
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange} />
                    </label>
                </form>
            </article>
        )
    }
}