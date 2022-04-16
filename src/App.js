import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AirlinesDetails from "./component/AirlinesDetails";
import Nav from "./component/Nav/Nav";
import Registration from "./component/Registration";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airlinesDetails/:id" element={<AirlinesDetails />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
