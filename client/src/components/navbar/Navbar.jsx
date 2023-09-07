import "./navbar.css";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from 'react';


const Navbar = () => {
  const { user } = useContext(AuthContext);
  // const history=useNavigate();
  // let userinfo=JSON.parse(localStorage.getItem('user'))
  const handleLogout=()=>{
    localStorage.clear();
    window.location.reload(true);
  }
  return (
    
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Sanchari.com</span>
        </Link>
        <div>
        {user ? <a href="/" textDecoration="none"><button className="navButton" onClick={handleLogout}>{user.username}</button></a>:(
          <div className="navItems">
            <a href="/register" textDecoration="none"><button className="navButton" >Register</button></a>
            <a href="/login" textDecoration="none"><button className="navButton" >Login</button></a>
          </div>
        )}
        </div>
      </div>
      </div>
  );
};

export default Navbar;
