var containerElement = document.querySelector('div#app');
var emailElement = document.querySelector('input[name=email]');
var senhaElement = document.querySelector('input[name=senha]');
var buttonElement = document.querySelector('button.botao');

var users = JSON.parse(localStorage.getItem('list_users')) || [];

function cadastrarUser() {
	email = emailElement.value;
	senha = senhaElement.value;
	
	users.push(email, senha);

	alert("OK");
	saveLocal();
	render();
}

buttonElement.onclick = cadastrarUser;

function render() {
	var labelElement = document.createElement('label');
	var labelText = document.createTextNode('Logado');
	var pElement = document.createElement('p');
	var pText = document.createTextNode(email);

	labelElement.appendChild(labelText);
	pElement.appendChild(pText);
	containerElement.appendChild(labelElement);
	containerElement.appendChild(pElement);
}

function saveLocal() {
	localStorage.setItem('list_users', JSON.stringify(users));
}
