import React, { Component } from 'react'
import AnimalItem from './AnimalItem';
import './Animal.css'



class AnimalList extends Component {

    render() {
        return (
            <section>
                <h1>All Animals&nbsp;&nbsp;
                <button type="button" className="animalButton"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </h1>
                <section className="allAnimals">
                {
                    this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item} {...this.props}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
                </section>
            </section>
        )
    }
}

export default AnimalList
