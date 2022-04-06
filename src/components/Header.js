import logo from '../images/Vector.svg'

function Header() {
    return ( <
        header className = "header" >
        <
        img src = { logo }
        className = "header__logo"
        alt = "Логотип" / >
        <
        /header>
    );
}

export default Header;