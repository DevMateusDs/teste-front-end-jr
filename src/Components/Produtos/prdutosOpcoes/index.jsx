import "./scss/produto.css";

export default function App() {
  return (
    <div className="container-prod">
      <div className="linha1"></div>
      <div className="prod-rel">
        <h1>Produtos relacionados</h1>
      </div>
      <div className="linha2"></div>

      <div className="produtos">
        <ul>
          <li>
            <a href="#">
              <span>Celular</span>
            </a>
          </li>
          <li>
            <a href="#">Acessórios</a>
          </li>
          <li>
            <a href="#">Tablets</a>
          </li>
          <li>
            <a href="#">Notebooks</a>
          </li>
          <li>
            <a href="#">Tvs</a>
          </li>
          <li>
            <a href="#">Ver todos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
