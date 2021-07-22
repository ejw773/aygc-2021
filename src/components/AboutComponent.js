import React from 'react';
import Feature from './FeaturesComponent';
import Jumbotron from './JumbotronComponent'
import { FEATUREDATA } from '../shared/aygcInfo'

const About = () => {
    return (
        <div>
            <Jumbotron currentPage="about"/>
            <div className="container text-copper">
                <div className="row icon-row">
                    {FEATUREDATA.map((feature) => (
                        <Feature 
                        key={feature.featureIndex}
                        icon={feature.featureIcon}
                        title={feature.featureTitle}
                        text={feature.featureText}
                        />
                    ))}
            </div>
        </div>
    </div>
    )
}

export default About;