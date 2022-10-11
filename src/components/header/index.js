
import Logo from '../img/logo.png'
import './style.css'
function Header() {
    return (
        <div className="top">
            <div className="containerTop">
                <img src={Logo} alt='logo' />
                <nav>
                    <a href='#produtos'>Produtos</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#contato'>Contato</a>
                </nav>
            </div>
        </div>
    )
}
export default Header;