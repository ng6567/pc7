import "./CollapseItem.css";
import Btn from "../assets/Vector.png";
import { useState } from "react";

//Composant collapse pour extension ouvert fermé 
function CollapseItem({ text, title }) {
  const [expansed, setExpansed] = useState(false);
  const toogleExpanse = () => {
    setExpansed(!expansed);
  };
  return (
    <div className="CollapseItem">
      <div className="CollapseItemHeader">
   
        <span className="CollapseTitle">{title}</span>
        <button  className={expansed ? "CollapseItemButton DownArrow" : "CollapseItemButton"} onClick={toogleExpanse}>
          <img className="Imagebutton" src={Btn} alt="bouton d'expansion" />
        </button>
      </div>
      {expansed && <p dangerouslySetInnerHTML={{__html:text}} className="CollapseItemText"></p>}
    </div>
  );
}

export default CollapseItem;
