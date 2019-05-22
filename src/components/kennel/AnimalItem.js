import React, { Component } from 'react';
import dog from './dog.png'
import './Animal.css'
import Animal from './AnimalDetail';


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
                <img src={dog} className="icon--dog" />
                <h3>{this.props.animal.name}</h3>
                <button key={this.props.animal.id} onClick={() => this.setState({saveDisabled: true}, this.handleClick)}
                disabled={this.state.saveDisabled}>Delete</button>
                {/* <button onClick={}>Details</button> */}
            </article>
        )
    }
}

export default AnimalItem;