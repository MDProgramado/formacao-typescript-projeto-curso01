import { formatarData } from "../utils/formats.js";
import { formatarMoeda } from "../utils/formats.js";
import { FormatoData } from "../types/FormatoData.js";


let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;



if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA__DIA_MES);
}

export function getSaldo(): number {
    return saldo
}


export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    } 
}
atualizarSaldo(saldo);