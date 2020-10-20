function Carros(carro) {
	
	this.carro = carro;
	
	this.nome = function () {
		return "Nome " + this.carro + '.';
	};
}


var carro1 = new Carros('Fox');


console.log(carro1.carro);
console.log(carro1.nome());

var carro2 = new Carros('Volkswagem');
console.log(carro2.carro);
console.log(carro2.nome());
console.log(carro1, carro2);


function Carro( primeiro, ultimo, ano, cor, combustivel) {
	this.carro = {
		primeiro: primeiro,
		ultimo: ultimo,
	};
	this.ano = ano;
	this.cor = cor;
	this.combustivel = combustivel;
	this.bio = function () {
		alert(
			this.carro.primeiro +
				' ' +
				this.carro.ultimo +
				' ' +
				this.ano +
				' ' +
				this.combustivel[0] +
				' ' +
				this.combustivel[1] +
				'.'
		);
	};
	this.carros = function () {
		alert("Nome " + this.carro.primeiro + '.');
	};
}

var carrosAnterior = new Carro('Fox', 'Volkswagem', 2016, 'Preto',  [
	'Gasolina',
	'Etanol',
]);
var carrosAnterior2 = new Carro('Fox1', 'Volkswagem1', 2016, 'Preto1', [
	'Gasolina1',
	'Etanol1',
]);
console.log(carrosAnterior, carrosAnterior2);