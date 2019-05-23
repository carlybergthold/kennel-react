import React, { Component } from 'react';
import dog from './dog.png'
import './Animal.css'
import { Link } from "react-router-dom";


class AnimalItem extends Component {

    handleClick = (event) => {
        this.props.deleteAnimal(this.props.animal.id);
    }

    state = {
        saveDisabled: false
    }

    render() {
        return (
            <article key={this.props.animal.id} className="animal--article">
                <img src={dog} className="icon--dog" alt="dog" />
                <h3>{this.props.animal.name}</h3>
                <Link className="see-animal-link" to={`/animals/${this.props.animal.id}`}>More About {this.props.animal.name}</Link>
                <section className="animal-buttons">
                    <button className="delete-animal-btn" key={this.props.animal.id} onClick={() => this.setState({saveDisabled: true}, this.handleClick)}
                    disabled={this.state.saveDisabled}>Delete</button>
                    <button type="button" className="edit-animal-btn"
                    onClick={() => {
                        this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                    }}  >Edit
                    </button>
                </section>
            </article>
        )
    }
}

export default AnimalItem;

