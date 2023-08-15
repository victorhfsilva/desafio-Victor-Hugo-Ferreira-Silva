import cardapio from '../data/cardapio.js';

class Carrinho {

    constructor(){
        this.cafe = {
            tipo: cardapio.cafe,
            quantidade: 0
        };
        this.chantily = {
            tipo: cardapio.chantily,
            quantidade: 0
        };
        this.suco = {
            tipo: cardapio.suco,
            quantidade: 0
        };
        this.sanduiche = {
            tipo: cardapio.sanduiche,
            quantidade: 0
        };
        this.queijo = {
            tipo: cardapio.queijo,
            quantidade: 0
        };
        this.salgado = {
            tipo: cardapio.salgado,
            quantidade: 0
        };
        this.combo1 = {
            tipo: cardapio.combo1,
            quantidade: 0
        };
        this.combo2 = {
            tipo: cardapio.combo2,
            quantidade: 0
        };
    }

    adicionar(item, quantidade){
        if (quantidade == 0) throw new Error("Quantidade inválida!")
        
        if (!this.hasOwnProperty(item)) throw new Error("Item inválido!")

        if (this._isItemPrincipal(item)){
            this[item].quantidade += quantidade;
        }
        else if (this._hasItemPrincipal(item)){
            this[item].quantidade += quantidade;
        }
        else {
            throw new Error("Item extra não pode ser pedido sem o principal");
        }
    }

    remover(item, quantidade){

        if (quantidade == 0) throw new Error("Quantidade inválida!")
        
        if (!this.hasOwnProperty(item)) throw new Error("Item inválido!")

        let quantidadeDoItem = this[item].quantidade;
        let quantidadeRemover = Math.abs(quantidade);
        
        if (quantidadeDoItem > quantidadeRemover) {
            this[item].quantidade -= quantidadeRemover;
        }
        else if (quantidadeDoItem == quantidadeRemover){
            if (!this._hasItensFilhos(item)){
                this[item].quantidade -= quantidadeRemover;
            }
            else throw new Error("Remova os itens principais antes dos extras")
        }
        else throw new Error("Não há itens suficientes no carrinho");     
    }

    limpar(item){
        this[item].quantidade = 0;
    }

    limparTodos(){
        for (let item in this){
            if (this[item].hasOwnProperty('quantidade')) {
                this[item].quantidade = 0;
            }
        }
    }

    calcularPrecoTotal() {
        let precoTotal = 0.0;
        let quantidadeTotal = 0;
        
        for (let item in this){
            if (this[item].hasOwnProperty('quantidade')) {
                precoTotal += this[item].quantidade*this[item].tipo.valor;
                quantidadeTotal += this[item].quantidade;
            }
        }

        if (quantidadeTotal == 0) throw new Error("Não há itens no carrinho de compra!"); 
        
        return precoTotal;
    }

    _isItemPrincipal(item){
        return this[item].tipo.itemPrincipal === null;
    }


    _hasItemPrincipal(item){
        let itemPrincipal = this[item].tipo.itemPrincipal;
        return this[itemPrincipal].quantidade > 0;
    }

    _hasItensFilhos(item){
        let itensFilhos = this[item].tipo.itensFilhos;
        let hasItensFilhos = true;
        for (let itemFilho of itensFilhos){
            hasItensFilhos = hasItensFilhos && this[itemFilho].quantidade > 0;
        }
        return hasItensFilhos;
    }

}

export default Carrinho;