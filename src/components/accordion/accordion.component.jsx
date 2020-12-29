import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './acordion.style.css';


export const Accordion = ({id, title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="accordion">
        <div className="query">
            <button className="btn" onClick={() => setShowInfo(!showInfo)}> {showInfo ? <AiOutlineMinus />  : <AiOutlinePlus /> } </button>
            <h3>{title}</h3>
        </div>
        {showInfo && <p className="query__info">{info}</p>}
        </article>
    )
}
