let valor: number = 3000;
let nome: string = "Bytebank";
let Isstatus: boolean = false;
let qualquer: any = 10;

//array

const lista: number[] = [];
lista.push(10, 10, 30, 40, 50, 60, 70, 80, 90, 100);

//Tipos Personalizados (Tpes Alias)

type Transacao = {
    valor: number;
    data: Date;
    tipoTransacao: TipoTransacao;
}
 enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto",
 }


const transacao: Transacao = {
    valor: 1000,
    data: new Date(),
    tipoTransacao: TipoTransacao.TRANSFERENCIA,
}

