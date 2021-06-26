import React from 'react';

const Jumbotron = (props) => {
    const jumbotronData = [
        {
            index: 0,
            page: "home",
            title: "AYGC, Inc.",
            subtitle: "Gravure Cylinder Engraving",
            bannerColor: "copper"
        },
        {
            index: 1,
            page: "about",
            title: "AYGC, Inc.",
            subtitle: "Global. Local. Growing.",
            bannerColor: "black"
        },
        {
            index: 2,
            page: "locations",
            title: "Yuncheng",
            subtitle: "Servicing Printers Around the Globe.",
            bannerColor:"black"
        },
        {
            index: 3,
            page: "production",
            title: "AYGC, Inc.",
            subtitle: "Top Equipment. Top Results.",
            bannerColor: "black"
        },
        {
            index: 4,
            page: "contact",
            title: "AYGC, Inc.",
            subtitle: "Spartanburg, South Carolina",
            bannerColor: "black"
        }
    ]
    const jumbotronPage = "jumbotron-" + props.currentPage;
    let jumbotronIndex;
    if (props.currentPage === "about") {
        jumbotronIndex = 1;
    } else if (props.currentPage === "locations") {
        jumbotronIndex = 2;
    } else if (props.currentPage === "production") {
        jumbotronIndex = 3;
    } else if (props.currentPage === "contact") {
        jumbotronIndex = 4;
    } else {
        jumbotronIndex = 0;
    };
    let title = jumbotronData[jumbotronIndex].title;
    let subtitle = jumbotronData[jumbotronIndex].subtitle;
    let bannerColor = jumbotronData[jumbotronIndex].bannerColor;
    const aygcBanner = "aygc-banner-" + bannerColor;
    return (
        <header className={jumbotronPage + " jumbotron jumbotron-fluid"}>
            <div className={aygcBanner + " contianer"}>
            <h1 className="text-center jumbotron-h1">{title}</h1>
            <p className="text-center jumbotron-p">{subtitle}</p>
            </div>
        </header>
    )
}

export default Jumbotron;