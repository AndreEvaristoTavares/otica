import Header from './components/header/index';
import Capa from './components/capa';
import Produtos from './components/produtos';
import Sobre from './components/sobre';
import Contato from './components/contato';
import Footer from './components/footer';
import './App.css';
function App() {
  return (
    <div className="containerPrincipal" >
      <Header />
      <Capa />
      <Produtos />
      <Sobre />
      <Contato />
      <Footer />
    </div>

  );
}

export default App;
