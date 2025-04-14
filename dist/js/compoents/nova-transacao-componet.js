"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoTransacao_js_1 = require("../types/TipoTransacao.js");
const saldo_component_js_1 = require("./saldo-component.js");
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Preencha todos os campos corretamente.");
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = Number(inputValor.value);
    let data = new Date(inputData.value);
    let saldo = (0, saldo_component_js_1.getSaldo)();
    if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao_js_1.TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao_js_1.TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválido.");
        return;
    }
    (0, saldo_component_js_1.atualizarSaldo)(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
