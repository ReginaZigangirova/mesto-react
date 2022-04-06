import React from "react"
function Card (props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card__elements" >
            <button className="card__delete" ></button>
            <img src={props.card.link} className="card__photo" alt="" onClick={handleClick}/ >
            <div className="card__text">
                <h2 className="card__tittle">{props.card.name}</h2>
                <div className="card__column">
                <button type="button" className="card__like"></button>
                <span className="card__like-count">
                {props.card.likes.length}
                </span>
            </div>
            </div>
        </div>
    )
}

export default Card