import "./Footer.css"; // Importation style
import LogoFooter from "../assets/LogoFooter.png";

// Composant page Footer

function Footer() {
  return (
    <div className="FooterBox">
      <div className="FooterContent">
        <img className="LogoFooter" src={LogoFooter} alt="Logo footer" />
        <div className="TextFooter">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
