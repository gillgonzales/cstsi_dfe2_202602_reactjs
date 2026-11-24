import { useEffect, useState } from 'react'
import { useProdutosContext } from '../../../contexts/ProdutosProvider.jsx'
import ProdutoTable from '../../../components/Tables/ProdutoTable/ProdutoTable.jsx'
import ModalRemoveProduto from './ModalRemoveProduto.jsx'
import { Outlet, useNavigate } from 'react-router'

const Produtos = () => {
  const { data, loadProdutos } = useProdutosContext()
  const [showModalRemove, setShowModalRemove] = useState(false)
  const [produtoAtual, setProdutoAtual] = useState({})
  const isLoaded = Array.isArray(data) && data?.length>0

  const navigate = useNavigate();

  const openModalEdit = (id) => {
    navigate(`/dashboard/produtos/edit/${id}`)
  }

  const openModalRemove = (id) => {
    const findedProd = data.find(produto => produto.id == id)
    if (!findedProd) return;
    setProdutoAtual(findedProd)
    setShowModalRemove(true)
  }

  useEffect(() => {
    loadProdutos()
  }, [])

  return (<div>
    <h2 className="produto-dashboard-title">Produtos Dashboard</h2>
    <div className="produto-actions">
      <button 
        className="btn primary"
        onClick={()=>{navigate('/dashboard/produtos/create')}}>
        Novo Produto
      </button>
    </div>
    {isLoaded
      ? <ProdutoTable
      produtos={data}
      edit={openModalEdit}
      remove={openModalRemove}
    />
  : <p>Carregando...</p>}
    {showModalRemove && <ModalRemoveProduto removedProduto={produtoAtual} close={() => setShowModalRemove(false)} />}
    <Outlet />
  </div>
  )
}

export default Produtos
