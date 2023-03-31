import "./CollapseItem.css";
import Btn from "../assets/Vector.png";
import { useState } from "react";

function CollapseItem({ text, title }) {
  const [expansed, setExpansed] = useState(false);
  const toogleExpanse = () => {
    setExpansed(!expansed);
  };
  return (
    <div className="CollapseItem">
      <div className="CollapseItemHeader">
        <span>{title}</span>
        <div>
          <p>Description</p>
          <button className="CollapseItemButton" onClick={toogleExpanse}>
            <img src={Btn} alt="bouton d'expansion" />
          </button>
        </div>
      </div>
      {expansed && <p className="CollapseItemText">{text}</p>}
    </div>
   
    
  );
 
}


export default CollapseItem;
