import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({ onSubmit, isOpen, onClose }) {
    const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({ name, link });
  }

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
    }
  }, [isOpen]);

    return (
    <PopupWithForm 
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
        title = 'Новое место'
        name = 'add-card'
        buttonText = 'Создать'>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Название" className="popup__input popup__input_type_card-name" name="name" id="cardname-input"  required/>
          <span className="popup__error" id="cardname-input-error"></span>
          <input value={link} onChange={(e) => setLink(e.target.value)} type="url" placeholder="Ссылка на картинку" className="popup__input  popup__input_type_card-link" name="link" id="link-input" required/>
          <span className="popup__error" id="link-input-error"></span>
        </PopupWithForm>)
}
export default AddPlacePopup