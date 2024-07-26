import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 relative md:fixed top-0 z-50 p-4 w-full flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold "><Link to="/">START FRAMEWORK</Link></h1>
                <div className="md:hidden">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className="text-white cursor-pointer text-4xl" 
                        onClick={toggleMenu} 
                    />
                </div>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <Link 
                            to="/about" 
                            className={`text-gray-300 hover:text-white ${activeLink === "/about" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/about")}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/portofolio" 
                            className={`text-gray-300 hover:text-white ${activeLink === "/portofolio" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/portofolio")}
                        >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`text-gray-300 hover:text-white ${activeLink === "/contact" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            {menuOpen && (
                <ul className="md:hidden bg-gray-800 w-full space-y-2 p-4 ">
                    <li>
                        <Link 
                            to="/about" 
                            className={`block text-gray-300 hover:text-white ${activeLink === "/about" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/about")}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/portofolio" 
                            className={`block text-gray-300 hover:text-white ${activeLink === "/portofolio" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/portofolio")}
                        >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`block text-gray-300 hover:text-white ${activeLink === "/contact" ? "bg-teal-400 p-2 w-fit rounded-md" : ""}`}
                            onClick={() => setActiveLink("/contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}
