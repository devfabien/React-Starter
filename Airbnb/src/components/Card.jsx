import React from "react";
import image1 from '../assets/image1.png';
import star from '../assets/Star.png';
export default function Card({image,ratio,num,info,money}) {
    return (
        <div className="card">
            <img src={image} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{ratio}</span>
                <span className="gray">({num}) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{info}</p>
            <p><span className="bold">From ${money}</span> / person</p>
        </div>
    )
}