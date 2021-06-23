import React from 'react';

const Card = (props) => {
    return (
        <div className="col-sm-6">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.image} alt={props.text} />
                <div className="card-body">
                    <p className="card-text" style={{color: 'black'}}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;