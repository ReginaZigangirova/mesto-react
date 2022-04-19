import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup ({ onSubmit, isOpen, onClose }) {
    const inputRef = React.useRef();
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({
          avatar: inputRef.current.value
        });
      }
    
      React.useEffect(() => {
        inputRef.current.value = '';
      }, [isOpen]);
    return (
    <PopupWithForm 
    isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
        title='Обновить аватар'
        name='avatar'
        buttonText='Сохранить'>
          <input ref={inputRef} type="url" placeholder="Обновить аватар" className="popup__input popup__input_type_avatar" name="avatar" id="editAvatar" required/>
          <span className="popup__error" id="editAvatar-error"></span>
        </PopupWithForm>)
}
export default EditAvatarPopup