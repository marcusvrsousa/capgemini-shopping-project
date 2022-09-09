import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    //parseio meu carrinho, que está salvo no localStorage, transformando ele em objeto 
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    //adicionando os produtos no meu vetor de itens
    this.itens.push(produto);
    //salvo no localStorage os itens na chave carrinho
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  removerItemCarrinho(produtoId: number){
    //const listaItens = localStorage.getItem("carrinho");
    this.itens = this.itens.filter(listaItens => listaItens.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));

  }

  limparCarrinho(){
    this.itens = [];
    localStorage.setItem("carrinho", "");
  }
}

