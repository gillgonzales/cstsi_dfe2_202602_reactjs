import { Suspense, use } from 'react'
import { useFornecedoresContext } from '../../../contexts/FornecedoresProvider'

const RowsFornecedores = ({fornecedoresPromisse})=>{
  const listFornecedores = use(fornecedoresPromisse)
  return listFornecedores.map((fornecedor, k) =>(
                           <tr key={k}>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.email}</td>
                            </tr>))
}

const FornecedoresPage = () => {

    const {loadFornecedoresSuspense } = useFornecedoresContext()
    const fornecedoresPromisse = loadFornecedoresSuspense()    

    return (
        <div>
        
            <table>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>cnpj</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <Suspense fallback={<tr><td colSpan={3}>Carregando</td></tr>}>
                        <RowsFornecedores fornecedoresPromisse={fornecedoresPromisse}/>
                    </Suspense>
                </tbody>
            </table>
        </div>
    )
}

export default FornecedoresPage
