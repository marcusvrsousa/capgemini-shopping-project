import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  valor = 0;

  constructor( public carrinhoService: CarrinhoService, 
    private router: Router,
    private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularValorTotal();
  }

  

  calcularValorTotal(){

    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  
   /* for(let i=0; i < this.itensCarrinho.length; i++){
      this.valor = this.itensCarrinho[i].preco * this.itensCarrinho[i].quantidade;
      this.total = this.total + this.valor;
      console.log(this.total);
    }
    return this.total; */ 
  }

  removerItemCarrinho(produtoId: number){
    //const listaItens = localStorage.getItem("carrinho");
    this.itensCarrinho = this.itensCarrinho.filter(listaItens => listaItens.id !== produtoId);
    this.carrinhoService.removerItemCarrinho(produtoId);
    this.calcularValorTotal();
    
  }

  comprar(){
    this.notificacaoService.notificar("Compra efetuada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
    
  }

}
