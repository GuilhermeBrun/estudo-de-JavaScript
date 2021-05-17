class cliente{
    nome;
    cpf;
}

class contaCorrente{
    agencia;
    _saldo = 0;

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
}

const cliente1 = new cliente();
cliente1.nome = `Ricardo`;
cliente1.cpf = 11122233304;

const cliente2 = new cliente();
cliente2.nome = `Alice`;
cliente2.cpf = 22233344405;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(300);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
