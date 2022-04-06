import React from "react";
import style from "../css/home.module.css"

function ErrorBox({ error , onErrorClear}) {
  return (
    <div className={style.errorBox} >
      <p>{error.msg}</p>
      <button onClick={() => onErrorClear(error.id)} >Clear</button>
    </div>
  );
}

export default ErrorBox;
