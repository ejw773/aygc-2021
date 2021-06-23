import React from 'react';
import Jumbotron from './JumbotronComponent'

const Production = () => {
    return (
        <div>
            <Jumbotron currentPage="production"/>
            <h1 style={{color: 'black'}}>Production Page</h1>
        </div>
    )
}

export default Production