import { fetchProducts } from "./utils/importProducts";


// import './styles/globals.css'

const content = await fetchProducts()
const container = document.querySelector(".products_grid_container");

setTimeout(()=>
  container.innerHTML = content.join('')
,1000);