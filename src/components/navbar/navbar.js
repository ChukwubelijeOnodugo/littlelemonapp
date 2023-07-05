import Logo from '../../assets/Logo.svg';
import hamburger from '../../assets/hamburger.svg';
import basket from '../../assets/basket.svg';
import './navbar.css';
import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Navbar() {
    const navRef = useRef(null);

    function showNav(e) {
        e.preventDefault();
        navRef.current.classList.add('active');
    }

    function hideNav(e) {
        e.preventDefault();
        navRef.current.classList.remove('active');
    }


    return (
        <header>
            <img src={hamburger} onClick={showNav} alt="Open Hamburger menu button" className='hamburger-menu' />
            <Link to={'/'}><img src={Logo} alt="Little Lemon Logo" /></Link>
            <nav ref={navRef}>
                <IoMdClose className='close-icon' onClick={hideNav} />
                <ul>
                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                    <li><Link href="#" className="nav-link">About</Link></li>
                    <li><Link href="#" className="nav-link">Menu</Link></li>
                    <li><Link to={'/book'} className="nav-link">Reservations</Link></li>
                    <li><Link href="#" className="nav-link">Order Online</Link></li>
                </ul>
            </nav>
            <img src={basket} alt="order basket icon" className='basket-icon' />
        </header>
    )
}

export default Navbar;