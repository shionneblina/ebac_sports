import * as S from './styles'
import { useAppSelector } from '../../hooks/redux'
import { paraReal } from '../Produto'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensNoCarrinho = useAppSelector((state) => state.carrinho.itens)
  const favoritos = useAppSelector((state) => state.carrinho.favoritos)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
