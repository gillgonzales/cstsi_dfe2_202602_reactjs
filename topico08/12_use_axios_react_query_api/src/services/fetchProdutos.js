import axiosClient from "../utils/axios-client";

export const fetchProdutosAll = async () => {
  const response = await axiosClient.get( `/produtos`);
  console.log({ response })
  const { data } = response;
  return data.data;
}

export const fetchProdutoById = async (id) => {
  const url =  `/produtos/${id}`;
  const response = await axiosClient.get(url);
  console.log({ response })
  const { data } = response;
  return data.data;
}