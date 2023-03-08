import NavbarIcon from 'assets/images/delivery-icon.svg';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
    return(
        <nav className='navbar navbar-container'>
            <Link to="/" className='link'>
                <img src={NavbarIcon} alt="" />
                <h2>App Delivery</h2>
            </Link>
        </nav>
    );
}

export default Navbar;