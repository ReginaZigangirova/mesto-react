import React from 'react';
function ImagePopup (props) {
    return ( 
        <div className={`popup popup_type_img ${props.card.name && 'popup_opened'}`}>

            <div className="popup__container popup__container_type_image">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <img src={props.card && props.card.link} alt={props.card && props.card.name} className="popup__img" alt=""/>
                <figcaption className="popup__title" >{props.card && props.card.name}</figcaption>
            </div>
        </div>
    )
}
export default ImagePopup