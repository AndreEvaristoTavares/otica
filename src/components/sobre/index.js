import './style.css';
import Loja from '../img/loja.png';
import Atendimento from '../img/atendimento.png';

function Sobre() {
    return (
        <section id="sobre" className="sobre">
            <div className="containerSobre">
                <h2>Quem somos nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                <div className="containerMenor">
                    <div>
                        <img src={Loja} alt='loja' />
                    </div>
                    <div>
                        <h3>Nossas filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div>
                        <img src={Atendimento} alt='atendimento' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Sobre;

