import React from "react";
import './UserItem.css'

const UserItem = props => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__avatar">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="user-item__details">
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                </div>
            </div>
        </li>
    )
};

export default UserItem;