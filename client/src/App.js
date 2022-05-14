import Home from "./pages/Home";
import Pay from "./pages/Pay";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/Pay" element={<Pay/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
};

export default App;
