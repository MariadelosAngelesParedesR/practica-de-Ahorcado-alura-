// # se utiliza para que la información del atributo sea privado.- 

class cuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = "";
        this.agencia = "";
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
}

const cuentaDeJose = new cuentaCorriente(); 

let saldo = cuentaDeJose.verSaldo();
console.log("El Saldo actual es " +saldo);

cuentaDeJose.despositoEnCuenta(500)
saldo = cuentaDeJose.verSaldo()
console.log("El Saldo actual es " +saldo);
cuentaDeJose.retiroEnCuenta(50)
saldo = cuentaDeJose.verSaldo()
console.log("El Saldo actual es " +saldo);
