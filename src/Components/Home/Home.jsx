import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div className="space-y-6">   
        <h2 className="text-2xl font-bold">Welcome to my web</h2>                    
            <Navbar></Navbar>         
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;
