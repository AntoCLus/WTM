import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token); 
                setUser(decoded); 
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem("token"); 
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login"); 
        
    };
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">WTM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                </ul>

                {/* Only show Login button when the user is not logged in */}
                {!user && (
                    <Link to="/login">
                        <button className="btn btn-light ms-3">Login</button>
                    </Link>
                )}

                {location.pathname === "/ExpenseManager" && user && (
                    <div className="d-flex">
                        <span className="navbar-text me-3">Welcome, {user.email.split("@")[0]}</span>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

   



