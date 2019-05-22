import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <div>
                <h1>Locations</h1>
                {
                    this.props.locations.map(location => (
                    <section key={location.id}>
                        <h3>{location.name}</h3>
                        <p>{location.address}</p>
                    </section>
                ))
                }
            </div>
        );
    }
}