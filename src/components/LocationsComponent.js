import React from 'react';
import Jumbotron from './JumbotronComponent'
import YunchengMap from '../images/Map-1024x610.jpg';
import YunchengLocations from '../images/yuncheng-locations.png';


const Locations = () => {
    return (
        <div>
            <Jumbotron currentPage="locations"/>
            <div className="container container-fluid">
                <div className="row">
                    <img className="img-fluid" src={YunchengMap} alt="World Map" />
                </div>
                <div className="row">
                    <img className="img-fluid" src={YunchengLocations} alt="Yuncheng Locations" />
                </div>
            </div>
        </div>
    )
}

export default Locations;
