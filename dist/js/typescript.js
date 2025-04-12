"use strict";
let valor = 3000;
let nome = "Bytebank";
let Isstatus = false;
let qualquer = 10;
//array
const lista = [];
lista.push(10, 10, 30, 40, 50, 60, 70, 80, 90, 100);
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const transacao = {
    valor: 1000,
    data: new Date(),
    tipoTransacao: TipoTransacao.TRANSFERENCIA,
};
