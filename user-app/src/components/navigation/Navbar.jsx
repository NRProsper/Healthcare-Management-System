import {useEffect, useState} from "react";
import { IoSearchOutline as Search } from "react-icons/io5";
import {FaBars as Bars} from "react-icons/fa6";
import logo from "../../assets/img/capstone.png"
import Container from "../Container.jsx";
import {Link, NavLink, useLocation} from "react-router-dom";
import MobileNavbar from "./MobileNavbar.jsx";
import {links} from "../../helpers/constants.js";



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 120);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`z-10 h-[74px] flex items-center fixed top-0 left-0 w-full transition-all ${scrolled ? `bg-white shadow-md`: `bg-transparent`}`}>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link className="font-semibold flex items-center gap-2 text-dark text-2xl" to={"/"}>
                            <img src={`${logo}`} className="h-[20px]" alt={"Logo"}/>
                            <span>CareSync</span>
                        </Link>
                        <nav className="hidden lg:inline-flex">
                            {
                                links.map((link, idx) => (
                                    <NavLink
                                        key={idx}
                                        className={({ isActive }) =>
                                            `uppercase py-6 px-4 first:pl-0 last:pr-0 text-sm font-semibold text-dark/80 hover:text-dc-blue ${isActive ? 'text-dc-blue' : ''}`
                                        }
                                        to={link.path}>{link.label}
                                    </NavLink>
                                ))
                            }
                        </nav>
                        {
                            isMobileOpen &&
                            <MobileNavbar handleClose={() => setIsMobileOpen(false)} links={links}/>
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-dc-blue rounded-full h-8 w-8 flex items-center justify-center">
                            <Search color={"#fff"}/>
                        </button>
                        <button onClick={() => setIsMobileOpen(true)}
                                className="lg:hidden bg-dc-blue rounded-full h-8 w-8 flex items-center justify-center">
                            <Bars color={"#fff"}/>
                        </button>
                    </div>
                </div>
            </Container>
        </header>

    )
}


export default Navbar;
