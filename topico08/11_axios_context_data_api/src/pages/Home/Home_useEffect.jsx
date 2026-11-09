/* eslint-disable react-hooks/exhaustive-deps */
import "./home.css"
import { useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";

const Home = () => {
  const { data, loadProdutos } = useProdutosContext()
  const isLoaded = data?.length > 0  || false

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
      <div className="home">
        <div className="products_grid_container">
          {isLoaded
            ? data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
            : <p>Carregando...</p>
          }
        </div>
      </div>
  );
};

export default Home;
