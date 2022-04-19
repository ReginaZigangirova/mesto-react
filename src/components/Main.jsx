import React from "react"
import api from './utils.js/Api'
import Card from './Card'
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Main (props) {
    const currentUser = React.useContext(CurrentUserContext);
    
    
   
    return (
        <main className="main-content">
            <section className="profile">
                <div className="profile__container">
                    <img src={currentUser.avatar} className="profile__avatar" alt="Аватар"/>
                    <button type="button" className="profile__pen" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <div className="profile__content">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button type="button" className="profile__button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__button-plus" onClick={props.onAddPlace}></button>
                
            </section>
            <section className="card">
            {props.cards.map((card) => {
                return (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            // onCardLike={handleCardLike}
            // onCardDelete={handleCardDelete}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
                )
            })}
            </section>
            
        </main>
    )
}
export default Main