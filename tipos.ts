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
//criar('vitor') //dá erro

//* Never
//Bem pouca utilizada
function loopInfinito(): never{
    while(true){ }
}//!função que nunca termina

function erro(msg: string): never{
    throw new Error(msg)
}//!função que retorna erro

function falha(): never{
    return erro('Algo falhou')
}//!função que chama um Never

//* Union Types, pode ter mais de um tipo
const nota: string | number = 5;
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);

//* Alias

type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}

//type Funcionarios = Array<Funcionario>;//pode receber mais de um tipo
const funcionarios: Funcionario [] = [{
    nome: 'vitor',
    sobrenome: 'farias',
    dataNascimento: new Date()
}];
function tratarFuncionario(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

//* Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string //!campo opcional
}

const contato: Contato = {
    nome: 'Vitor',
    telefone1: '123854564',
}