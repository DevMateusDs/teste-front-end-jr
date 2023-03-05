import "./scss/page.css";
import Avbar from "../Components/Avbar/index.jsx";
import Navbar from "../Components/navbar/index.jsx";
import Categorias from "../Components/Categorias/index.jsx";
import Carrossel from "../Components/carrossel/index.jsx";
import CarrosselCard from "../Components/CarrosselCard/index.jsx";
import Produtos from "../Components/Produtos/prdutosOpcoes/index.jsx";
import VerTodos from "../Components/Produtos/produtosVerTodos/index.jsx";
import Vitrine from "../Components/Vitrine/index.jsx";
import Parceiros from "../Components/parceiros/parceiros/index.jsx";
import imgParceiros from "../Assets/Img/Mask Group.png";
import imgParceirosProd from "../Assets/Img/Group 1449.png";
import Marcas from "../Components/Marcas/index.jsx";
import Rodape from "../Components/Rodape/index.jsx"

function App() {
  return (
    <>
      <div className="header">
        <Avbar />
        <Navbar />
        <Categorias />
      </div>
      <div className="main">
        <Carrossel />
        <CarrosselCard />
        <Produtos />
        <Vitrine container="containerVitrine"/>
        <Parceiros
          img={imgParceiros}
          h1="Parceiros"
          mask="mask"
          elements="elements"
          container="container-parceiros"
        />
        <VerTodos />
        <Vitrine container="container-vitrine"/>
        <Parceiros
          img={imgParceirosProd}
          h1="Produtos"
          mask="maskProd"
          elements="elementsProd"
          container="container-parceirosProd"
        />
        <Marcas />
        <VerTodos />
        <Vitrine container="container-vitrine"/>
      </div>
      <div className="footer">
        <Rodape/>
      </div>
    </>
  );
}

export default App;
