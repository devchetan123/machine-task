import React from "react";
import style from "../css/home.module.css"

function InfoBox({ info, onInfoClear }) {
  return (
    <div className={style.infoBox} >
      <p>{info.msg}</p>
      <button onClick={() => onInfoClear(info.id)} >Clear</button>
    </div>
  );
}

export default InfoBox;
