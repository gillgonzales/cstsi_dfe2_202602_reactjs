
import { Link, useParams } from "react-router";
import { Cards } from "../../components/Cards/Cards";
import { useProdutosDataById } from "../../hooks/useProdutosData";
import "./show.css";
import { Suspense } from "react";

const ShowCardSuspense = ({ id }) => {

    const { data, isFetching } = useProdutosDataById(id);
    return !isFetching && <Cards item={data} />
}


const Show = () => {

    const { id } = useParams()
    console.log("id", Number(id))

    return (
        <div className='w-full h-1/2'>
            <Suspense fallback={<p>Carregando...</p>}>
                <ShowCardSuspense id={id} />
            </Suspense>
            <hr />
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Show;
