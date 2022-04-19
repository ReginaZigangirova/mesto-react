import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card (props) {
    const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? 'card__delete_visible' : 'card__delete_hidden'}`
  );

  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="card__elements" >
            <button className={cardDeleteButtonClassName} onClick={() => props.onCardDelete(props.card)}></button>
            <img src={props.card.link} className="card__photo" alt="" onClick={handleClick}/ >
            <div className="card__text">
                <h2 className="card__tittle">{props.card.name}</h2>
                <div className="card__column">
                <button type="button" className={cardLikeButtonClassName} onClick={() => props.onCardLike(props.card)}></button>
                <span className="card__like-count">
                {props.card.likes.length}
                </span>
            </div>
            </div>
        </div>
    )
}

export default Card