import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <Link className='footer-link' to='/'>Protection des données personnelles</Link>
                <Link className='footer-link' to='/'>Mentions légales</Link>
                <Link className='footer-link' to='/'>Cookie</Link>
                <Link className='footer-link' to='/'>Conditions générales de ventes</Link>
            </div>
        </footer>
    )
}

export default Footer;