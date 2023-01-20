import { Cliente } from "./cliente.js";

export class cuentaCorriente{
    cliente;
    numero;
    agencia;
    #saldo;
    

    constructor(){
        this.cliente = null;
        this.numero = "";
        this.agencia = "";
        this.#saldo = 0;
    }


    despositoEnCuenta(valor){
        if (valor > 0)
            this.#saldo += valor;
        return this. #saldo;

    }

    retiroEnCuenta(valor){
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;    
    }

    verSaldo () {
        return this.#saldo; 
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retiroEnCuenta(valor);
        cuentaDestino.despositoEnCuenta(valor);

    }
}



// const cuentaDeJose = new cuentaCorriente(); 

// let saldo = cuentaDeJose.verSaldo();
// console.log("El Saldo actual es " +saldo);

