import React, { Component } from 'react'
import locationImg from './location.svg'
import { Link } from 'react-router-dom';



export default class LocationList extends Component {
    render() {
        return (
            <div>
                <h1>Locations</h1>
                <section className="location-list">
                {
                    this.props.locations.map(location => (
                    <section key={location.id} className="location-card">
                        <img src={ locationImg } className="icon--location" alt="location"/>
                        <h3>{location.name}</h3>
                        <p>{location.address}</p>
                        <Link className="see-location-link" to={`/locations/${location.id}`}>More About {location.name}</Link>
                    </section>
                ))
                }
                </section>
            </div>
        );
    }
}