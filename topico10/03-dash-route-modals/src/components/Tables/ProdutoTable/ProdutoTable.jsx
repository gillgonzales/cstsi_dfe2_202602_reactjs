const ProdutoTable = ({ produtos, edit, remove }) => {
    return (
        <table>
            <thead className="bg-(--table-bg-color)">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th className="hidden md:inline-block">Preço</th>
                    <th className="hidden md:inline-block">Qtd</th>
                    <th className="hidden md:inline-block">Importado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, key) => (
                    <tr key={`produto${key}`}  className="odd:bg-primary-200">
                        <td>{produto.id}</td>
                        <td >{produto.nome}</td>
                        <td className="hidden md:inline-block bg-inherit">{produto.preco}</td>
                        <td className="hidden md:inline-block bg-inherit">{produto.qtd_estoque}</td>
                        <td className="hidden md:inline-block bg-inherit">{produto.importado ? 'Sim' : 'Não'}</td>
                        <td >
                            <div className="flex flex-col sm:flex-row">
                                <button className="btn primary" onClick={() => edit(produto.id)}>Editar</button>
                                <button className="btn danger" onClick={() => remove(produto.id)}>Excluir</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProdutoTable
