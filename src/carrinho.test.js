import Carrinho from './model/carrinho.js'; // Caminho para a classe Carrinho

describe('Carrinho', () => {
  let carrinho;

  beforeEach(() => {
    carrinho = new Carrinho();
  });

  test('deve adicionar itens corretamente', () => {
    carrinho.adicionar('cafe', 2);
    expect(carrinho.cafe.quantidade).toBe(2);
  });

  test('não deve adicionar quantidade inválida', () => {
    expect(() => carrinho.adicionar('cafe', 0)).toThrow('Quantidade inválida!');
  });

  test('não deve adicionar item inválido', () => {
    expect(() => carrinho.adicionar('itemInvalido', 1)).toThrow('Item inválido!');
  });

  test('não deve adicionar extra sem item principal', () => {
    expect(() => carrinho.adicionar('chantily', 1)).toThrow(
      'Item extra não pode ser pedido sem o principal'
    );
  });

  test('deve remover itens corretamente', () => {
    carrinho.adicionar('cafe', 3);
    carrinho.remover('cafe', 2);
    expect(carrinho.cafe.quantidade).toBe(1);
  });

  test('não deve remover quantidade inválida', () => {
    expect(() => carrinho.remover('cafe', 0)).toThrow('Quantidade inválida!');
  });
  
  test('não deve remover item inválido', () => {
    expect(() => carrinho.remover('item_inexistente', 1)).toThrow('Item inválido!');
  });
  
  test('não deve remover mais itens do que presentes no carrinho', () => {
    carrinho.adicionar('cafe', 2);
    expect(() => carrinho.remover('cafe', 3)).toThrow('Não há itens suficientes no carrinho');
  });
  
  test('não deve remover itens principais antes dos extras', () => {
    carrinho.adicionar('sanduiche', 1);
    carrinho.adicionar('queijo', 1);
  
    expect(() => carrinho.remover('sanduiche', 1)).toThrow('Remova os itens principais antes dos extras');
  });

  test('deve remover um item principal corretamente caso não possua itens extras', () => {
    carrinho.adicionar('cafe', 2);
    
    carrinho.remover('cafe', 2);
  
    expect(carrinho.cafe.quantidade).toBe(0);
  });
  

  test('deve calcular o preço total corretamente', () => {
    carrinho.adicionar('cafe', 2);
    carrinho.adicionar('chantily', 1);
    expect(carrinho.calcularPrecoTotal()).toBe(7.5); // 2 * 3.0 + 1 * 1.5
  });

  test('não deve retornar preço total se o carrinho estiver vazio', () => {
    expect(() => carrinho.calcularPrecoTotal()).toThrow('Não há itens no carrinho de compra!');
  });

  test('deve limpar um item corretamente', () => {
    carrinho.adicionar('cafe', 2);
    carrinho.limpar('cafe');
    expect(carrinho.cafe.quantidade).toBe(0);
  });

  test('deve limpar todos os itens corretamente', () => {
    carrinho.adicionar('cafe', 2);
    carrinho.adicionar('sanduiche', 1);
    carrinho.adicionar('queijo', 3);
  
    carrinho.limparTodos();
  
    expect(carrinho.cafe.quantidade).toBe(0);
    expect(carrinho.sanduiche.quantidade).toBe(0);
    expect(carrinho.queijo.quantidade).toBe(0);
  });
  
});
