import { useQuery } from '@tanstack/react-query'
import { fetchProdutoById, fetchProdutosAll } from '../services/fetchProdutos';

export function useProdutosData() {
  const query = useQuery({
    queryFn: fetchProdutosAll,
    queryKey: ['produtos-data'],
  });
  return query;
}

export function useProdutosDataById(id) {
  const query = useQuery({
    queryFn: ()=>fetchProdutoById(id),
    queryKey: ['produtos-data-id',id],
  });
  return query;
}