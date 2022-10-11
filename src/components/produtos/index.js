import './style.css'
import Oculos1 from '../img/oculos01.png';
import Oculos2 from '../img/oculos02.png';
import Oculos3 from '../img/oculos03.png';
import Oculos4 from '../img/oculos04.png';

function Produtos(){
    return(
        <section id="produtos" className="produtos" >
            <div className="containerProdutos" >
                <h2>Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div>
                    <figure>
                        <figcaption>Óculos de grau</figcaption>
                        <img src={Oculos1} alt='oculos' />
                        <figcaption>R$ 500,00</figcaption>
                    </figure>
                    <figure>
                        <figcaption>Óculos transitions</figcaption>
                        <img src={Oculos2} alt='oculos' />
                        <figcaption>R$ 750,00</figcaption>
                    </figure>
                    <figure>
                        <figcaption>Óculos de sol</figcaption>
                        <img src={Oculos3} alt='oculos' />
                        <figcaption>R$ 700,00</figcaption>
                    </figure>
                    <figure>
                        <figcaption>Óculos infantil</figcaption>
                        <img src={Oculos4} alt='oculos' />
                        <figcaption>500,00</figcaption>
                    </figure>
                </div>
                <h2>Todos os nossos produtos incluem:</h2>
                <ul>
                    <li>Garanti de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}
export default Produtos
