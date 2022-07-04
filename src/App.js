import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/locationData";

export default function App(){
  const locations = data.map(location => {
    return <Card 
      key = {location.id}
      location = {location}
      />
  });


  return (
    <div>
      <Navbar />
      <section className="location-list">
        {locations}
      </section>
    </div>
  );
}
