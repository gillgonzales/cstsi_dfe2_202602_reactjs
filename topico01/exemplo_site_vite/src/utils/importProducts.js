import produtos from '../mocks/mockedProducts.json'

const card = (produto) => {
    return `<li>
    <img src='${produto.image}' width=50 height=50>
    <h3>${produto.nome}</h3>
    </li>`;
}

const importProdutos = () => {
    console.log(produtos)
    let containerProds = document.querySelector('#containerProds')

    let listProds = produtos.reverse().map(p => card(p)).join('')
    containerProds.innerHTML = `<ul>${listProds}</ul>`


}

export default importProdutos