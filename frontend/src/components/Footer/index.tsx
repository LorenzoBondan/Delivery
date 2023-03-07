import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

import './styles.css';

const Footer = () => {
    return(
        <footer className='footer-container'>
            <span>App desenvolvido por Lorenzo Bondan</span>
            <div className='footer-icons-container'>
                <a href="https://github.com/LorenzoBondan">
                    <i style={{marginRight:"8px", color:"white"}}><AiFillGithub/></i>
                </a>
                <a href="https://linkedin.com">
                    <i style={{marginRight:"8px", color:"white"}}><BsLinkedin/></i>
                </a>
                <a href="https://instagram.com/lorenzobondan">
                    <i style={{marginRight:"8px", color:"white"}}><FaInstagram/></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;