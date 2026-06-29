import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/produtosApi'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { adicionarAoCarrinho, favoritar } from '../store/slices/carrinhoSlice'
import { Produto as ProdutoType } from '../types'

import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useAppDispatch()
  const { data: produtos = [], isLoading, isError } = useGetProdutosQuery()
  const favoritos = useAppSelector((state) => state.carrinho.favoritos)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(favoritar(produto))
  }

  const handleAdicionarAoCarrinho = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={handleFavoritar}
          aoComprar={handleAdicionarAoCarrinho}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
