import Carrinho from './model/carrinho.js';
import taxas from './data/taxas.js';

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {       
        
        try {
            let taxa = taxas[metodoDePagamento];
            if (taxa == null) throw new Error("Forma de pagamento inválida!");

            const carrinho = new Carrinho();
            
            for (let i of itens){
                let [item, quantidade] = i.split(',');
                if (quantidade >= 0) carrinho.adicionar(item, quantidade);
                else carrinho.remover(item, quantidade);
            }

            let precoTotal = carrinho.calcularPrecoTotal();
            let precoTotalComTaxas = precoTotal*taxa;
            let stringPreco = ("R$ "+precoTotalComTaxas.toFixed(2)).replace('.', ',');
            return stringPreco;
        }
        catch(error) {
            return error.message;
        }
        
    }
}

export { CaixaDaLanchonete };
