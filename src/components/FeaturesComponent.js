import React from 'react';

const Feature = (props) => {
    return (
        <div className="col-lg-4">
            <div className="features-icons-item bg-dark mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className={props.icon + " m-auto text-copper"}></i></div>
                <h3 className="text-center">{props.title}</h3>
                <p className="lead mb-0 text-copper">{props.text}</p>
            </div>
        </div>
    )
}

export default Feature;
