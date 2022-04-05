import React from "react"
import api from './utils.js/Api'
import Card from './Card'

function Main(props) {
    const [cards, setCards] = React.useState([])
    const [userInfo, setUserInfo] = React.useState({})
    React.useEffect(() => {
        Promise.all([api.getProfile(), api.getInitialCards()])
            .then(([profileInfo, card]) => {
                setUserInfo(profileInfo)
                setCards(card)
            }).catch((err) => {
                console.error(err);
            })
    }, [])

    return ( <
        main className = "main-content" >
        <
        section className = "profile" >
        <
        div className = "profile__container" >
        <
        img src = { userInfo.avatar }
        className = "profile__avatar"
        alt = "Аватар" / >
        <
        button type = "button"
        className = "profile__pen"
        onClick = { props.onEditAvatar } > < /button> <
        div className = "profile__info" >
        <
        div className = "profile__content" >
        <
        h1 className = "profile__name" > { userInfo.name } < /h1> <
        button type = "button"
        className = "profile__button"
        onClick = { props.onEditProfile } > < /button> <
        /div> <
        p className = "profile__job" > { userInfo.about } < /p> <
        /div> <
        /div> <
        button type = "button"
        className = "profile__button-plus"
        onClick = { props.onAddPlace } > < /button>

        <
        /section> <
        section className = "card" > {
            cards.map((card, id) => {
                return ( <
                    Card key = { id }
                    card = { card }
                    link = { card.link }
                    name = { card.name }
                    likes = { card.likes.length }
                    onCardClick = { props.onCardClick }
                    />
                )
            })
        } <
        /section>

        <
        /main>
    )
}
export default Main