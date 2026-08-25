import mockedProducts from './mocks/mockedProducts.json';
import './App.css'
import { Card } from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import { Header } from './components/Header/Header';

mockedProducts.reverse()

function App() {

  const products = mockedProducts
  // const products = []

  return (
    <>
      <NavBar/>
      <Header/>
      <main className="guest_main">
        <div className="home">
          <div className="products_grid_container">
            {products?.length
              ? products.map((prod,index) => (
               <Card key={`prod_${index}`} product={prod}/>
              ))
              : <p>Carregando...</p>
            }
          </div>
        </div>
      </main>
      <div className="footer_container">
        <h2>Rodapé</h2>
      </div>
    </>
  )
}

export default App
