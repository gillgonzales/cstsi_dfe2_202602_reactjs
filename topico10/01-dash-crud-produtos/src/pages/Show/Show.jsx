import { useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { useProdutosContext } from "../../contexts/ProdutosProvider";
import { Link, useParams } from "react-router";

const Show = () => {
    const { data, loadProdutos } = useProdutosContext()
    const { id } = useParams()

    useEffect(() => {
       loadProdutos(id)
    }, [])

    return (
            <div className="show-main">
                <div className="show-grid">
                    {!data?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={data} />
                    }
                </div>
                <Link to="/">Voltar</Link>
            </div>
    );
};

export default Show;
