import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AirlinesDetails from "./component/AirlinesDetails";
import Nav from "./component/Nav/Nav";
import Registration from "./component/Registration";
import PassengerList from "./component/Passenger/PassengerList";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airlinesDetails/:id" element={<AirlinesDetails />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/allPassenger" element={<PassengerList />} />
        <Route path="/passengerProfile" element={<PassengerList />} />
      </Routes>
    </div>
  );
}

export default App;
