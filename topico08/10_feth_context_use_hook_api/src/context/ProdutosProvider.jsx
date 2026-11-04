/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import { fetchProdutosApi } from '../services/fetchApiData';
import { useContext } from 'react';

export const ProdutosContext = createContext({})

const ProdutosProvider = ({ children }) => {

    const [data, setData] = useState(null);

    const contextValue = {
        loadProdutos: () => loadProdutos(),
        findProduto: (id) => findProduto(id),
        freshProdutos: () => freshProdutos(),
        get: () => data,
        set: (data) => setData(data),
        update: (id, data) => editProduto(id, data),
        remove: (id) => deleteProduto(id)
    }

    const loadProdutos = async () => {
        if (data) return data;
        const produtos = await fetchProdutosApi()
        setData(produtos)
        return produtos;
    }

    const findProduto = async (id) => {

        // if(getCachedData(id))
        //     // return true;
        console.log('find', id)
        const produto = await fetchProdutosApi(id)
        return produto;
    }

    const freshProdutos = async (id) => {
        const produtos = await fetchProdutosApi()
        setData(produtos)
        return produtos;
    }

    const editProduto = (id, data) => {
        return true;//TODO
    }

    const deleteProduto = (id) => {
        return true;//TODO
    }

    // const getCachedData = (id) => {
    //     if (data?.length > 0 && id) {
    //         console.log({ data, id })
    //         let produto = data.find(p => p.id === +id)
    //         if (produto) {
    //             setData(produto);
    //             return true;
    //         }
    //     }
    // }

    return (
        <ProdutosContext.Provider value={contextValue}>
            {children}
        </ProdutosContext.Provider>
    )
}

export const useProdutosContext = () => useContext(ProdutosContext);

export default ProdutosProvider;
