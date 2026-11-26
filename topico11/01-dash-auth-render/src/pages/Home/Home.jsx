import {useEffect} from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";

const Home = () => {
  const { data, error, loadProdutos } = useProdutosContext()

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
      <div className="home-main">
        <div className="home-grid">
          {data?.length
            ? data.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
            : error
              ? <p>{error}</p>
              : <p>Carregando...</p>
          }
        </div>
      </div>
  );
};

export default Home;
