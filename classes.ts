class Data {
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia) //funciona pq é public
//console.log(data.mes) ñ funciona pq é private

const data2 = new Data(1, 1); //Ano default


class Data2 {
    constructor(public dia: number, public mes: number, public ano: number = 1970){
        /*this.dia = dia; GERA AUTOMATICAMENTE
        this.mes = mes;
        this.ano = ano;*/
    }
}