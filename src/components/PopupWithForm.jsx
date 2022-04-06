function PopupWithForm ({name, title, children,isOpen, onClose, buttonText}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} > 

            <div className="popup__container">
                <button type="button" className="popup__close" onClick={onClose}></button>
                <h2 className='popup__text'>{title}</h2>
                <form action="submit" className='popup__form' name={name}>
                    {children}
                    <button type="submit" className="popup__save">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm