import React from 'react';

const About = () => {
    return (
        <div className="container text-copper">
            <div className="row icon-row">
                <div className="col-lg-4">
                    <div className="features-icons-item bg-dark mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi-globe m-auto text-copper"></i></div>
                        <h3 className="text-center">Global</h3>
                        <p className="lead mb-0 text-copper">AYGC, Inc. (American Yuncheng Gravure Cylinder, Inc.) is a part of the global Yuncheng Group, which includes 11,000 employees and 120+ plants spread over 30+ countries.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item bg-dark mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi-map m-auto text-copper"></i></div>
                        <h3 className="text-center">Local</h3>
                        <p className="lead mb-0 text-copper">In 2007, AYGC, Inc. established an operation in Spartanburg, South Carolina. Our state-of-the-art facility manufactures regular and speciality engraved printing cylinders.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="features-icons-item bg-dark mx-auto mb-0 mb-lg-3">
                        <div className="features-icons-icon d-flex"><i className="bi-graph-up m-auto text-copper"></i></div>
                        <h3 className="text-center">Growing</h3>
                        <p className="lead mb-0 text-copper">Our global buying power and in-house manufacturing of most of our equipment  makes us connected, innovative, and responsive to our client’s needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;