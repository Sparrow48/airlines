import { Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AirlinesDetails from "./component/AirlinesDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/airlinesDetails" element={<AirlinesDetails />} />
      </Routes>
    </div>
  );
}

export default App;
