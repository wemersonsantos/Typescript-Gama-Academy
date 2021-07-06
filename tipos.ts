//* Boolean
const contaPaga: boolean = false; //variavel:tipo = valor

//* Number
const idade: number = 23;
const avaliacao: number = 4.5;

//* String
const nome: string = 'Vitor Farias';

//* Array
const idades: number[] = [ 23, 28, 45];
const idades2: Array<number> = [ 12, 30, 89];

//* Tuple
let jogadores: [string, string, string];//!Tres posições com tipos string cada, apenas 3!
jogadores = ['Vitor', 'Fulano', 'Ciclano'];

//* Enum 
enum StatusAprovacao {
    aprovado = '001',
    reprovado = '002',
    rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.aprovado; //define valores e utiliza como um objeto

//* Any
const retornaDaAPI: any[] = [123, 'Vitor', false];
const retornoDaAPI2: any = {
    //.............
}//! Usado com cuidado

//* Void
function printarNaTela(msg: string): void{ //funçao sem retorno
    console.log(msg);
}//pouco utilizado

//* Null e Undefined
const u: undefined = undefined;
const n: null = null;

//* Object
function criar(objeto: object){
    //......
}
criar({
    propriedade: 1
})