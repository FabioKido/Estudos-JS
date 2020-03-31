const alunos = [
	{name: "Fábio", idade: 26},
	{name: "Kido", idade: 26}
];

for (let i = 0; i < alunos.length; i++) {
	console.log(alunos[i].name);
}

for (let aluno of alunos)
	console.log(aluno.idade);

alunos.map(aluno => console.log(aluno.name, aluno.idade));

const nome = "kkk";

const objeto = {
	nome: "Quido",
	metodo: function() {
		console.log(this.nome);
	}
}

objeto.metodo();