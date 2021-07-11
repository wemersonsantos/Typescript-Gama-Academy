"use strict";
//* Boolean
var contaPaga = false; //variavel:tipo = valor
//* Number
var idade = 23;
var avaliacao = 4.5;
//* String
var nome = 'Vitor Farias';
//* Array
var idades = [23, 28, 45];
var idades2 = [12, 30, 89];
//* Tuple
var jogadores; //!Tres posições com tipos string cada, apenas 3!
jogadores = ['Vitor', 'Fulano', 'Ciclano'];
//* Enum 
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["aprovado"] = "001";
    StatusAprovacao["reprovado"] = "002";
    StatusAprovacao["rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.aprovado; //define valores e utiliza como um objeto
//* Any
var retornaDaAPI = [123, 'Vitor', false];
var retornoDaAPI2 = {
//.............
}; //! Usado com cuidado
//* Void
function printarNaTela(msg) {
    console.log(msg);
} //pouco utilizado
//* Null e Undefined
var u = undefined;
var n = null;
//* Object
function criar(objeto) {
    //......
}
criar({
    propriedade: 1
});
//criar('vitor') //dá erro
//* Never
//Bem pouca utilizada
function loopInfinito() {
    while (true) { }
} //!função que nunca termina
function erro(msg) {
    throw new Error(msg);
} //!função que retorna erro
function falha() {
    return erro('Algo falhou');
} //!função que chama um Never
//* Union Types, pode ter mais de um tipo
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;//pode receber mais de um tipo
var funcionarios = [{
        nome: 'vitor',
        sobrenome: 'farias',
        dataNascimento: new Date()
    }];
function tratarFuncionario(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
//* Valores nulos ou opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Vitor',
    telefone1: '123854564',
};
//* Type Assertion
var minhaIdade = 23;
minhaIdade.toString(); //informando qual tipo para o typeScript
//(<number>minhaIdade).toString(); //outro forma de declarar
var input = document.getElementById('numero1'); //informando que irá receber um elemento HTML
//const input = <HTMLInputElement>document.getElementById('numero1'); //outro forma de declarar
console.log(input.value); //!senão informar, irá ocorrer erro
