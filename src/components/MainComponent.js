import React from 'react';
import Header from "./HeaderComponent"
import Footer from './FooterComponent'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: true
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Main;