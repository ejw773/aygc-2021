import React from 'react';
import Jumbotron from  './JumbotronComponent'

const Home = () => {
    return (
        <div>
            <Jumbotron currentPage="home"/>
            <h1 style={{color: 'black'}}>Home Page</h1>
        </div>
    )
}

export default Home;