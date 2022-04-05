import React from 'react';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from '../components/ImagePopup'

function App() {
    //попап аватар
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    };
    //попап добавления карточки
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    };
    //попап профиль
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    //закрытие попапов 
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setSelectedCard({});

    }
    //картинка попап
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleCardClick(card) {
        setSelectedCard(card);
    }
    return ( <
        div className = "App" >
        <
        div className = "wrapper" >
        <
        div className = "page" >
        <
        Header / >
        <
        Main onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onEditAvatar = { handleEditAvatarClick }
        onCardClick = { handleCardClick }
        />

        <
        Footer / >

        <
        PopupWithForm isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        title = { 'Редактировать профиль' }
        name = { 'edit' }
        buttonText = { 'Сохранить' }
        children = {
            ( <
                >
                <
                input type = "text"
                placeholder = "Имя"
                className = "popup__input popup__input_type_name"
                name = "name"
                id = "nameInput"
                required / >
                <
                span className = "popup__error"
                id = "nameInput-error" > < /span> <
                input type = "text"
                placeholder = "Описание"
                className = "popup__input  popup__input_type_job"
                name = "about"
                id = "jobInput"
                required / >
                <
                span className = "popup__error"
                id = "jobInput-error" > < /span> <
                />
            )
        }
        /> <
        PopupWithForm isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        title = { 'Обновить аватар' }
        name = { 'avatar' }
        buttonText = { 'Сохранить' }
        children = {
            ( <
                >
                <
                input type = "url"
                placeholder = "Обновить аватар"
                className = "popup__input popup__input_type_avatar"
                name = "avatar"
                id = "editAvatar"
                required / >
                <
                span className = "popup__error"
                id = "editAvatar-error" > < /span> <
                />
            )
        }
        /> <
        PopupWithForm isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        title = { 'Новое место' }
        name = { 'add-card' }
        buttonText = { 'Создать' }
        children = {
            ( <
                >
                <
                input type = "text"
                placeholder = "Название"
                className = "popup__input popup__input_type_card-name"
                name = "name"
                id = "cardname-input"
                required / >
                <
                span className = "popup__error"
                id = "cardname-input-error" > < /span> <
                input type = "url"
                placeholder = "Ссылка на картинку"
                className = "popup__input  popup__input_type_card-link"
                name = "link"
                id = "link-input"
                required / >
                <
                span className = "popup__error"
                id = "link-input-error" > < /span> <
                />
            )
        }
        /> <
        ImagePopup card = { selectedCard }
        onClose = { closeAllPopups }
        /> <
        /div> <
        /div> <
        /div>
    );
}

export default App;