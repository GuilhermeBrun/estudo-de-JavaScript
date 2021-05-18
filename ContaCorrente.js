import {cliente} from "./Cliente.js"

export class contaCorrente{
    static numeroDeContas = 0
   
    agencia;

    _saldo = 0;
    _cliente;

    get saldo(){
        return this.saldo;
    }

    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente;
    }

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;  
            return valor;     
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}