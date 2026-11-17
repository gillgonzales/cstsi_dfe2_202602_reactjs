import { useEffect } from 'react'
import { useFornecedoresContext } from '../../../contexts/FornecedoresProvider'

const FornecedoresPage = () => {

    const {data, loadFornecedores } = useFornecedoresContext()
    const listFornecedores = data;
    const isLoaded = listFornecedores?.length > 0

    useEffect(() => {
        loadFornecedores()
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
                    {isLoaded
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
