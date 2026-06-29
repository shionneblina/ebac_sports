import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const jaExiste = state.itens.find((p) => p.id === action.payload.id)
      if (!jaExiste) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const jaEFavorito = state.favoritos.find(
        (p) => p.id === action.payload.id
      )
      if (jaEFavorito) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, favoritar } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
