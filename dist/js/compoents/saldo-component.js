"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSaldo = getSaldo;
exports.atualizarSaldo = atualizarSaldo;
const formats_js_1 = require("../utils/formats.js");
const formats_js_2 = require("../utils/formats.js");
const FormatoData_js_1 = require("../types/FormatoData.js");
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = (0, formats_js_1.formatarData)(dataAcesso, FormatoData_js_1.FormatoData.DIA_SEMANA__DIA_MES);
}
function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = (0, formats_js_2.formatarMoeda)(saldo);
    }
}
