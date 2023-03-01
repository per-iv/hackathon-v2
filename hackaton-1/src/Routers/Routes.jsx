import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Datos from "../Pages/Datos";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Datos" element={<Datos/>}/>
      </Routes>
    </Router>
  );
}
