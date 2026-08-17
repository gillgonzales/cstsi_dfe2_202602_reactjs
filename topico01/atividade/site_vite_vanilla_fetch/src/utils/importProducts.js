import { card } from "../components/card";

function renderProducts(listProducts){
   return listProducts.map(product => card(product))
}

export async function fetchProducts(){
   // products = mockedProducts.reverse()

   const response = await fetch('http://localhost:8000/produtos')
   console.log(response)
   const products = await response.json()
   console.log(products)
   console.log(renderProducts(products))
   return renderProducts(products)
}