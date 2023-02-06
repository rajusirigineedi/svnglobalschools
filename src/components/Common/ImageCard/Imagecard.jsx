import React from "react";
import styles from './Imagecard.module.css';
import './Imagecard.css';
const Imagecard = (props) => {
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card-title">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};
export default Imagecard;