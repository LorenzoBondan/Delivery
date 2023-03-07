import NavbarIcon from 'assets/images/delivery-icon.svg';

import './styles.css';

const Navbar = () => {
    return(
        <nav className='navbar navbar-container'>
            <img src={NavbarIcon} alt="" />
            <h2>App Delivery</h2>
        </nav>
    );
}

export default Navbar;