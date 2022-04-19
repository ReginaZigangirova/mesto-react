import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import api from './utils.js/Api'
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup';

function App() {
   const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    Promise.all([api.getProfile()])
    .then(([user]) => {
      setCurrentUser(user);
    }).catch((err) => {
      console.error(err);
    });
  }, []);
//попап аватар
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
function handleEditAvatarClick ()  {
    setIsEditAvatarPopupOpen(true)
}; 
//попап добавления карточки
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
function handleAddPlaceClick ()  {
 setIsAddPlacePopupOpen(true)
}; 
//попап профиль
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
function handleEditProfileClick ()  {
   setIsEditProfilePopupOpen(true)
}

//закрытие попапов 
function closeAllPopups () {
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

//редактирование профиля
function handleUpdateUser(user) {
  api.editProfile(user.name, user.about)
    .then((user) => {
      
        setCurrentUser(user)
        closeAllPopups();

    })
    .catch((err) => {
      console.log(err);
    });
}
// function handleUpdateUser(user) {
//   api.editProfile(user.name, user.about)
//     .then((res) => {
//       if (res.ok) {
//         setCurrentUser(user)
//         closeAllPopups();
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
//редактирование аватара
function handleAvatarUpdate({ avatar }) {
  api.setAvatar(avatar)
    .then(() => {
      setCurrentUser({ ...currentUser, avatar });
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
}
//добавление новой карточки
const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    Promise.all([ api.getInitialCards()])
    .then(([ card] ) => {
        setCards(card)
      }).catch((err) => {
        console.error(err);
      })
    }, [])
//лайк
function handleCardLike(card) {
 
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  
  if (!isLiked) {
      api.addLike(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  } else {
      api.deleteLike(card._id).then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        }).catch((err) => {
          console.error(err);
        });
  }
} 
//удаление карточки
function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then(() => {
      setCards((items) => items.filter((c) => c._id !== card._id && c));
    }).catch((err) => {
      console.error(err);
    });
}

function handleAddPlaceSubmit(data) {
  api.addCard(data.name, data.link).then((newCard) => {
    setCards([newCard, ...cards]);
    closeAllPopups();
  }).catch((err) => {
    console.error(err);
  });
}
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <div className="wrapper">
      <div className="page">
      <Header />
      <Main 
      onEditProfile = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick={handleCardClick}
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
      />
      
      <Footer />
      <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}/>
       
       <EditAvatarPopup 
       isOpen={isEditAvatarPopupOpen} 
       onClose={closeAllPopups}
       onSubmit={handleAvatarUpdate} />

<AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleAddPlaceSubmit}
        />
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
    </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
