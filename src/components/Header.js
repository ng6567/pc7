import { Link } from "react-router-dom";
import "./Header.css"
import logo from '../assets/logo.png'

function Header(){
    return (
        <div className="Header">

            <nav className="Nav">
                <img src={logo} alt='logo' className='logo'/>
                <ul className="Accueil">
                    
                    <li>
                        <Link className='Nav-link' to = '/'>Accueil</Link>
                    </li>
                    <li>
                        <Link className='Nav-link' to = '/A-propos'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header