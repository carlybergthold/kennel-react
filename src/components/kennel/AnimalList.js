import React, { Component } from 'react'
import AnimalItem from './AnimalItem';


export default class AnimalList extends Component {

    render() {
        return (
            <section>
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

// export default class AnimalList extends Component {

//     render() {

//         state = {
//             saveDisabled: false
//         }

//         return (
//             <div>
//                 <h1>Animals</h1>
//             {
//                 this.props.animals.map(animal =>
//                 <section key={animal.id}>
//                     <h3>Name: {animal.name}</h3>
//                     <p>Type: {animal.type}</p>
//                     <button key={animal.id} onClick={() => this.setState({ saveDisabled: true },this.props.deleteAnimal(animal.id))}
//                     disabled={this.state.saveDisabled}
//                     >Delete</button>
//                 </section>
//                 )
//             }
//             </div>
//         );
//     }
// }
