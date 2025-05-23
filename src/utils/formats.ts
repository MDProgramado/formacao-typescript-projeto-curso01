import { FormatoData } from "../types/FormatoData.js";

export function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {currency: "BRL", style: "currency"});
}

export function formatarData(data: Date, formato: FormatoData= FormatoData.PADRAO): string {

    if(formato === FormatoData.PADRAO) {
        return data.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
    }

    else if(formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit"
        })
    }
    return data.toLocaleDateString("pt-BR")
}