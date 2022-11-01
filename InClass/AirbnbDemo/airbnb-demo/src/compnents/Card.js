import React from "react";

import ExoImage1 from "../componenets/detroit-murals.jpeg";
import BookmarkImage from "../components/bookmark-logo.png";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" alt="detroit murals" />
            <div className="card-stats">
                <img src={BookmarkImage} className="card-bookmark" alt="" />
                <span>{props.rating}</span>
                <span className="card-span-gray">
                    ({props.reviewCount}) &bull;{" "}
                </span>
                <span className="card-span-gray">{props.city}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="span-price-bold">From ${props.price}/</span>
                person
            </p>
        </div>
    );
}
