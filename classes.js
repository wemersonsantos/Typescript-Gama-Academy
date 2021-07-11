"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2020);
console.log(data.dia); //funciona pq é public
//console.log(data.mes) ñ funciona pq é private
var data2 = new Data(1, 1); //Ano default
var Data2 = /** @class */ (function () {
    function Data2(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        /*this.dia = dia; GERA AUTOMATICAMENTE
        this.mes = mes;
        this.ano = ano;*/
    }
    return Data2;
}());
