import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Services from "./services";
import { Route,Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Dashboard from "./dashboard";
function Header(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg  bg-dark">
    <div className="container-fluid ">
        <a className="navbar-brand text-light" href="#">Services</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
            <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-light" to="signup">Signup</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-light" to="login">Login</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <div>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
        </div>
    );
}

export default Header;