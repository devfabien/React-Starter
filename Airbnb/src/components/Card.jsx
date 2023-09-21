import React from "react";
import star from '../assets/Star.png';
export default function Card(props) {
    return (
        <div className="card">
            {!props.item.openSpot&&<div className="card--sold">Sold OUT</div>}
            <img src={`../images/${props.item.image}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.ratio}</span>
                <span className="gray">({props.item.num}) • </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.item.info}</p>
            <p><span className="bold">From ${props.item.money}</span> / person</p>
        </div>
    )
}