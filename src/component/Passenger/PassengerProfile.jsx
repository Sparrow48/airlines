import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { passengerProfile } from "./../../store/PassengerSlice";
import { ApiUrl } from "../../config";

function PassengerProfile() {
  const { profile } = useSelector((state) => state.passengers);

  const param = useParams();
  const dispatch = useDispatch();

  console.log(param.id);

  useEffect(() => {
    try {
      dispatch(passengerProfile({ ApiUrl, id: param.id }));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <h1>{profile.name}</h1>
    </div>
  );
}

export default PassengerProfile;
