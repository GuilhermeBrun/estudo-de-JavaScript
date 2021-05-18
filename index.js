import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente(`Guilherme`, 11122233304);
const cliente2 = new cliente(`Alice`, 22233344405);

const contaCorrenteCliente1 = new contaCorrente(1001, cliente1);
contaCorrenteCliente1.depositar(500);

const contaCorrenteCliente2 = new contaCorrente(1001, cliente2);

contaCorrenteCliente1.transferir(200, contaCorrenteCliente2);

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log(contaCorrente.numeroDeContas);

