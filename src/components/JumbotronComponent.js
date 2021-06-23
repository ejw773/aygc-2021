import React from 'react';

const Jumbotron = (props) => {
    const jumbotronPage = "jumbotron-" + props.currentPage;
    let bannerColor = 'black';
    if (props.currentPage === "home") {
        bannerColor = 'copper';
    }
    const aygcBanner = "aygc-banner-" + bannerColor;
    return (
        <header className={jumbotronPage + " jumbotron jumbotron-fluid"}>
            <div className={aygcBanner + " contianer"}>
            <h1 className="text-center jumbotron-h1">AYGC, Inc.</h1>
            <p className="text-center jumbotron-p">Gravure Cylinder Engraving</p>
            </div>
        </header>
    )
}

export default Jumbotron;