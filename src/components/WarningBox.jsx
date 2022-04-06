import React from 'react'
import style from "../css/home.module.css"

function WarningBox({warning, onWarningClear}) {
  return (
    <div className={style.warningBox}>
        <p>{warning.msg}</p>
        <button onClick={() => onWarningClear(warning.id)} >Clear</button>
    </div>
  )
}

export default WarningBox