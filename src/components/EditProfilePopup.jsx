import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup ({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDesriptionChange(e) {
    setDescription(e.target.value);
  }
    return (
        <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title ='Редактировать профиль'
      name='edit'
      buttonText='Сохранить'>
         <input type="text" value={name|| "" } onChange={handleNameChange} placeholder="Имя" className="popup__input popup__input_type_name" name="name" id="nameInput"  required/>
         <span className="popup__error" id="nameInput-error"></span>
         <input type="text" value={description|| "" } onChange={handleDesriptionChange}  placeholder="Описание" className="popup__input  popup__input_type_job" name="about" id="jobInput"  required/>
         <span className="popup__error" id="jobInput-error"></span>
      </PopupWithForm>
    )
}
export default EditProfilePopup