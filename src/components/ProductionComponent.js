import React from 'react';
import Jumbotron from './JumbotronComponent';
import Card from  './CardComponent'
// import ohioImage from '../images/';
// import polishmaster from '../images/';
import k5 from './img-square/K5Smart.jpg';
// import platingLine from '../images/';
// import acigraf from '../images/';
import fingerprint from './img-square/012.jpg';
import inventory from  './img-square/005.jpg'
import dere from './img-square/002.jpg';
// import prepress from '../images/';


const Production = () => {
    const productionData = [
        // {
        //     prodIndex: 0,
        //     title: "Ohio Engravers",
        //     image: ohioImage
        // },
        // {
        //     prodIndex: 1,
        //     title: "Daetwyler PolishMaster",
        //     image: polishmaster
        // },
        {
            prodIndex: 2,
            title: "Hell K5 Smart Engraver",
            image: k5
        },
        // {
        //     prodIndex: 3,
        //     title: "Automated Copper / Chrome Plating Line",
        //     image: platingLine
        // },
        // {
        //     prodIndex: 4,
        //     title: "Acigraf SuperPerfast Cutting / Polishing System",
        //     image: acigraf
        // },
        {
            prodIndex: 5,
            title: "Two-Stage Printing Characterization Process",
            image: fingerprint
        },
        {
            prodIndex: 6,
            title: "Cylinder Inventory Management",
            image: inventory
        },
        {
            prodIndex: 7,
            title: "De-Chrome / Re-Chrome",
            image: dere
        }
        // {
        //     prodIndex: 8,
        //     title: "Prepress Services",
        //     image: prepress
        // }

    ]
    return (
        <div>
            <Jumbotron currentPage="production"/>
            <div className="container-fluid card-container">
                <div className="row">
                        {productionData.map((item) => (
                            <Card 
                            key={item.prodIndex}
                            text={item.title}
                            image={item.image}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Production