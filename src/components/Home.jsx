import React, { useState } from 'react'
import style from "../css/home.module.css"
import ErrorBox from './ErrorBox';
import InfoBox from './InfoBox';
import WarningBox from './WarningBox';
import { v4 } from "uuid"

function Home() {

    const [error, setError] = useState([]);
    const [warning, setWarning] = useState([]);
    const [info, setInfo] = useState([]);
    const [type, setType] = useState("");
    const [msg, setMsg] = useState("")

    const onErrorClear = (id) => {
        const afterClear = error.filter((x) => x.id !== id)
        setError(afterClear)
    }
    const onWarningClear = (id) => {
        const afterClear = warning.filter((x) => x.id !== id)
        setWarning(afterClear)
    }
    const onInfoClear = (id) => {
        const afterClear = info.filter((x) => x.id !== id)
        setInfo(afterClear)
    }

    const submitMsg = () => {

        const payload = {
            id : v4(),
            msg,
            type,
        }

        if(msg != "") {
            if(type === "error"){
                setError([...error, payload])
            }
            else if(type === "warning"){
                setWarning([...warning, payload])
            }
            else if(type === "info"){
                setInfo([...info, payload])
            }
        }
    }

  return (
    <>
    <div className={style.inputSection} >
        <input className={style.inputBox} type="text" placeholder='Enter Message Here' value={msg} onChange={(e) => setMsg(e.currentTarget.value)} />
        <select className={style.selectBox} onChange={(e) => setType(e.currentTarget.value)} >
            <option disabled selected>Select</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
        </select>
        <button className={style.submitBtn} onClick={() => submitMsg()} >SUBMIT</button>
    </div>
    <div className={style.mainDiv} >
        <div>
            <h3>Error Type 1</h3>
            <p>Count {error.length}</p>
            {
                error.map(error => {
                    return <ErrorBox key={error.id} error={error} onErrorClear={onErrorClear} />
                })
            }
        </div>
        <div>
            
            <h3>Warning Type 2</h3>
            <p>Count {warning.length}</p>
            {
                warning.map(warning => {
                    return <WarningBox  key={warning.id}  warning={warning} onWarningClear={onWarningClear} />
                })
            }
        </div>
        <div>
             
             <h3>Info Type 3</h3>
             <p>Count {info.length}</p>
             {
                 info.map(info => {
                     return <InfoBox  key={info.id}  info={info} onInfoClear={onInfoClear} />
                 })
             }
        </div>
    </div>

    </>
  )
}

export default Home