import { Suspense } from "react";
import { Cards } from "../../components/Cards/Cards";
import { useProdutosData } from "../../hooks/useProdutosData";

const ProdutosGridSuspense = ({ produtos }) => {
  const {data} = useProdutosData();

  return (
    <>
      <p>Total de Produtos: {data?.length}</p>
      <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
        {data?.map((product, i) => (
          <Cards key={`prod_key_${i}`} item={product} />
        ))}
      </div>
    </>
  );
}

const Home = () => {

  return (
    <div>
      <h1 className="text-4xl text-blue-600 font-bold">Produtos:</h1>
      <div className="w-full 2xl:max-w-7xl">
        <Suspense fallback={<p>Carregando...</p>}>
          <ProdutosGridSuspense/>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
