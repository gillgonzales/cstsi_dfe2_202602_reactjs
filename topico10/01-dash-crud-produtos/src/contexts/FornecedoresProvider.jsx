/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {axiosClient} from "../../../../topico09/02_axios_cookies_spa/src/utils/axios-client";

const FornecedoresContext = createContext({});

const FornecedoresProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error,setError] = useState(false);
  const resourceUrl = '/fornecedores'

  const loadFornecedores = async (id = null) => {
    const url = resourceUrl + (id ? `/${id}` : '');
    try {
      const {data} = await axiosClient.get(url);

      if (!data)
        throw new Error("Erro ao carregar fornecedores");

      Array.isArray(data) && data.reverse();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error?.message)
    }
  };

  const loadFornecedoresSuspense = async (id = null) => {
    const url = resourceUrl + (id ? `/${id}` : '');
    try {
      const {data} = await axiosClient.get(url);

      if (!data)
        throw new Error("Erro ao carregar fornecedores");

      Array.isArray(data) && data.reverse();
      return data;
    } catch (error) {
      console.log(error);
      setError(error?.message)
    }
  };

  const addFornecedor = async (payload=null) => {
    //TODO
    // try{
    //   if(!produto) throw Error("Fornecedor não informado");
    //   console.log(`Cadastrar novo produto:`,{produto});
    //   const {data} = await axiosClient.post(resourceUrl, produto)
    //   if(!data) throw new Error("Erro ao atualizar fornecedor");
    //   const _data = data?.data;
    //   const {message} = data;
    //  console.log({_data,message});
    //  loadFornecedores()
    //  return message;
    // }catch(error){
    //   console.error(error);
    //   return error?.response?.data?.message || "Erro ao atualizar fornecedor";
    // }
  };

  const editFornecedor = async (id, payload=null) => {
    //TODO
    // try{
    //   console.log(`Atualizar Fornecedor id: ${id}`,{produto});
    //   const {data} = await axiosClient.put(`${resourceUrl}/${id}`, produto)
    //   if(!data) throw new Error("Erro ao atualizar fornecedor");
    //   const _data = data?.data;
    //   const {message} = data;
    //  console.log({_data,message});
    //  loadFornecedores()
    //  return message;
    // }catch(error){
    //   console.error(error);
    //   return error?.response?.data?.message || "Erro ao atualizar produto";
    // }
  };

  const deleteFornecedor = async (id) => {
    //TODO
    // alert(`Remove Fornecedor id: ${id}`);
    // const {data} = await axiosClient.delete(`${resourceUrl}/${id}`);
    // const {message} = data;
    // console.log({message});
    // loadFornecedores()
    // return message;
  };

  return (
    <FornecedoresContext.Provider
      value={{
        data,
        error,
        loadFornecedores,
        loadFornecedoresSuspense,
        setData,
        addFornecedor,
        editFornecedor,
        deleteFornecedor,
      }}
    >
      {children}
    </FornecedoresContext.Provider>
  );
};

export const useFornecedoresContext = ()=> useContext(FornecedoresContext)
export default FornecedoresProvider;
