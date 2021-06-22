import React from 'react';
import Header from "./HeaderComponent"
import Footer from './FooterComponent'
import About from './AboutComponent';
import Locations from './LocationsComponent'
import Production from './ProductionComponent'
import Contact from './ContactComponent'
import Home from './HomeComponent'
import Jumbotron from './JumbotronComponent'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }
    render() {
        return (
            <div>
            <Router>
                <Header />
                <Jumbotron />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/locations">
                        <Locations />
                    </Route>
                    <Route path="/production">
                        <Production />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router> 
            <Footer />
            </div>
        )
    }
}

export default Main;