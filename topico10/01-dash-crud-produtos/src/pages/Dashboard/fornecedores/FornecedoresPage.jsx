import { useEffect } from 'react'
// import { useFornecedorContext } from '../../../contexts/FornecedorProvider'

const FornecedoresPage = () => {

    // const {listFornecedores, loadFornecedores } = useFornecedorContext()
    const listFornecedores = [];

    useEffect(() => {
        // loadFornecedores()
    }, [])

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
                    {listFornecedores?.length > 0
                        ? listFornecedores.map((fornecedor, k) =>
                            <tr key={k}>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.email}</td>
                            </tr>
                        )
                        : <></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FornecedoresPage
