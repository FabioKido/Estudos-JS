const carrinho = [
	{ id: 1, preco: 2, qtd: 2, estoque: 10 },
	{ id: 2, preco: 3, qtd: 2, estoque: 2 },
	{ id: 2, preco: 4, qtd: 5, estoque: 2 }
]

const filtroEmEstoque = item => item.estoque >= item.qtd

const subtotal = item => item.preco * item.qtd

const soma = (soma, subtotal) => subtotal + soma

const total = carrinho.filter(filtroEmEstoque).map(subtotal).reduce(soma)
		
console.log(total);

const user = {
	nome: 'Diego',
	idade: 23,
	empresa: 'Rocketseat'
};

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);
