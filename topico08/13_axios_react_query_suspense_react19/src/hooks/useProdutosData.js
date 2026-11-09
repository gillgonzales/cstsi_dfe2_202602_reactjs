import { fetchProdutoById, fetchProdutosAll } from "../services/fetchProdutos";
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

export function useProdutosData() {
  const query = useSuspenseQuery({
    queryFn: fetchProdutosAll,
    queryKey: ['produtos-data'],
  });
  return query;
}

export function useProdutosDataById(id) {
  const query = useSuspenseQuery({
    queryFn: ()=>fetchProdutoById(id),
    queryKey: ['produtos-data-id',id],
  });
  return query;
}