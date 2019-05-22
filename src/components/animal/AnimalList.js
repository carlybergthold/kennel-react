import React, { Component } from 'react'
import AnimalItem from './AnimalItem';



class AnimalList extends Component {

    render() {
        return (
            <section>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                <h2>All Animals</h2>
                <section className="allAnimals">
                {
                    this.props.animals.map((item) => {
                        return <AnimalItem key={item.id} animal={item}
                            deleteAnimal={this.props.deleteAnimal} />
                    })
                }
                </section>
            </section>
        )
    }
}

export default AnimalList
