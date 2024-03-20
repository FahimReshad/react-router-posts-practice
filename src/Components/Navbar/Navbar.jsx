import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="space-x-6 text-xl font-semibold">
            <NavLink className="" to="/header">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;