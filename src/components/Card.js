import React from "react";
import locationPin from "../assets/images/location-pin.png";
import "../assets/css/card.css";

export default function Card({location}){
  return (
    <div>
      <div className="card--details">
        <img src={location.imageUrl} alt = "location" className="card--image"/>
        <div className="card--locationDetails">
          <div className="card--links">
            <img src={locationPin} alt="pin" className="card--pin"/>
            <span className="card--country">{location.location.toUpperCase()}</span>
            <a href={location.googleMapsUrl}>View on Google Maps</a>
          </div>
            <h1 className="card--locationName">{location.title}</h1>
          <span className="card--length">{location.startDate} - {location.endDate}</span>
          <p className="card--description">{location.description}</p>
        </div>
          <hr className="seperator"/>
      </div>
    </div>
  );
};
