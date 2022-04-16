import React from "react";
import { useSelector } from "react-redux";

function Passenger() {
  const { passengers } = useSelector((state) => state.passengers);

  return (
    <div>
      {passengers.map((passenger) => (
        <h1> {passenger.name}</h1>
      ))}
      <div></div>
    </div>
  );
}

export default Passenger;
