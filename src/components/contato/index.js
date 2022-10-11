import Local from '../img/local.png';
import Telefone from '../img/telefone.png';
import Email from '../img/email.png';

import Fb from '../img/fb.png';
import Ig from '../img/ig.png';
import Tt from '../img/tt.png';
import './style.css';
function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="containerContato">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="cont">
                    <div>
                        <h3>Contato</h3>
                        <ul>
                            <li><a href=""><img src={Local} alt='local' /> Local</a></li>
                            <li><a href=""><img src={Telefone} alt='telefone' /> Número</a></li>
                            <li><a href=""><img src={Email} alt='email' /> E-mail</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Redes sociais</h3>
                        <ul>
                            <li><a href=""><img src={Fb} alt='facebook' /> Facebook</a></li>
                            <li><a href=""><img src={Ig} alt='instagram' /> Instagram</a></li>
                            <li><a href=""><img src={Tt} alt='twitter' /> Twiter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contato;