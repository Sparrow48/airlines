import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AirlinesDetails from "./component/AirlinesDetails";
import Nav from "./component/Nav/Nav";
import Registration from "./component/Registration";
import PassengerList from "./component/Passenger/PassengerList";
import PassengerProfile from "./component/Passenger/PassengerProfile";
import EditName from "./component/Passenger/EditName";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airlinesDetails/:id" element={<AirlinesDetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/allPassenger" element={<PassengerList />} />
        <Route path="/passengerProfile/:id" element={<PassengerProfile />} />
        <Route path="/editName/:id" element={<EditName />} />
      </Routes>
    </div>
  );
}

export default App;
