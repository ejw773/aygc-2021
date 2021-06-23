import React from 'react';
import Feature from './FeaturesComponent';
import Jumbotron from './JumbotronComponent'

const About = () => {
    const featureData = [
        {
            featureIndex: 0,
            featureIcon: "bi-globe",
            featureTitle: "Global",
            featureText: "AYGC, Inc. (American Yuncheng Gravure Cylinder, Inc.) is a part of the global Yuncheng Group, which includes 11,000 employees and 120+ plants spread over 30+ countries."
        },
        {
            featureIndex: 1,
            featureIcon: "bi-map",
            featureTitle: "Local",
            featureText: "In 2007, AYGC, Inc. established an operation in Spartanburg, South Carolina. Our state-of-the-art facility manufactures regular and speciality engraved printing cylinders."
        },
        {
            featureIndex: 2,
            featureIcon: "bi-graph-up",
            featureTitle: "Growing",
            featureText:"Our global buying power and in-house manufacturing of most of our equipment  makes us connected, innovative, and unrelentingly responsive to our client’s needs."
        }
    ]
    return (
        <div>
            <Jumbotron currentPage="about"/>
            <div className="container text-copper">
                <div className="row icon-row">
                    {featureData.map((feature) => (
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