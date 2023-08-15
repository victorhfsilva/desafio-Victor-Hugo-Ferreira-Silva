const cardapio = {

    cafe: {
      descricao: "Café",
      valor: 3.00,
      itemPrincipal: null,
      itensFilhos: ['chantily']
    },

    chantily: {
      descricao: "Chantily (extra do Café)",
      valor: 1.50,
      itemPrincipal: 'cafe',
      itensFilhos: null
    },

    suco: {
      descricao: "Suco Natural",
      valor: 6.20,
      itemPrincipal: null,
      itensFilhos: null,
    },

    sanduiche: {
      descricao: "Sanduíche",
      valor: 6.50,
      itemPrincipal: null,
      itensFilhos: ['queijo']
    },

    queijo: {
      descricao: "Queijo (extra do Sanduíche)",
      valor: 2.00,
      itemPrincipal: 'sanduiche',
      itensFilhos: null
    },

    salgado: {
      descricao: "Salgado",
      valor: 7.25,
      itemPrincipal: null,
      itensFilhos: null
    },

    combo1: {
      descricao: "1 Suco e 1 Sanduíche",
      valor: 9.50,
      itemPrincipal: null,
      itensFilhos: null
    },

    combo2: {
      descricao: "1 Café e 1 Sanduíche",
      valor: 7.50,
      itemPrincipal: null,
      itensFilhos: null
    }

  };
  
export default cardapio;