/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {axiosClient} from "../utils/axios-client";

const ProdutosContext = createContext({});

const ProdutosProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error,setError] = useState(false);
  const resourceEndpoint = '/produtos'

  const loadProdutos = async (id = null) => {
    const url = resourceEndpoint + (id ? `/${id}` : '');
    try {
      const {data} = await axiosClient.get(url+"?perPage=10");
      const dataApi = data?.data;
      console.log({dataApi});

      if (!dataApi)
        throw new Error("Erro ao carregar produtos");

      Array.isArray(dataApi) && dataApi.reverse();
      setData(dataApi);
    } catch (error) {
      console.log(error);
      setError(error?.message)
      throw new Error(error?.message)
    }
  };

  const addProduto = async (produto=null) => {
    try{
      if(!produto) throw Error("Produto não informado");
      console.log(`Cadastrar novo produto:`,{produto});
      const {data} = await axiosClient.post(resourceEndpoint, produto,
         {
          headers: { "Content-Type": "multipart/form-data" }
      });
      if(!data) throw new Error("Erro ao atualizar produto");
      const dataApi = data?.data;
      const {message} = data;
     console.log({dataApi,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const editProduto = async (id, produto=null) => {
    try{
      console.log(`Atualizar Produto id: ${id}`,{produto});
      const {data} = await axiosClient.put(`${resourceEndpoint}/${id}`, produto)
      if(!data) throw new Error("Erro ao atualizar produto");
      const dataApi = data?.data;
      const {message} = data;
     console.log({dataApi,message});
     loadProdutos()
     return message;
    }catch(error){
      console.error(error);
      return error?.response?.data?.message || "Erro ao atualizar produto";
    }
  };

  const deleteProduto = async (id) => {
    // alert(`Remove Produto id: ${id}`);
    const {data} = await axiosClient.delete(`${resourceEndpoint}/${id}`);
    const {message} = data;
    console.log({message});
    loadProdutos()
    return message;
  };

  return (
    <ProdutosContext.Provider
      value={{
        data,
        error,
        loadProdutos,
        setData,
        addProduto,
        editProduto,
        deleteProduto,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = ()=> useContext(ProdutosContext)
export default ProdutosProvider;
