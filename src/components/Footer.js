import "./Footer.css"; // Importation style
import LogoFooter from "../assets/LogoFooter.png";

// Composant page Footer

function Footer(_props) {
  return (
    
      <div className="FooterBox">
        <img className="LogoFooter" src={LogoFooter} alt="Logo footer" />
        <div className="TextFooter">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    
  );
}
export default Footer;
