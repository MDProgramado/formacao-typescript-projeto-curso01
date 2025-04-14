"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatarMoeda = formatarMoeda;
exports.formatarData = formatarData;
const FormatoData_js_1 = require("../types/FormatoData.js");
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { currency: "BRL", style: "currency" });
}
function formatarData(data, formato = FormatoData_js_1.FormatoData.PADRAO) {
    if (formato === FormatoData_js_1.FormatoData.PADRAO) {
        return data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
    else if (formato === FormatoData_js_1.FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    return data.toLocaleDateString("pt-BR");
}
