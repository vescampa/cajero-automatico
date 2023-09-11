const cuentas = 
    {
        usuario: "Pepe",
        password: "12345",
        saldo: 200,
    }


    var cajaDeposito = document.getElementById("caja-deposito")
    var cajaRetiro = document.getElementById("caja-retiro")
    
    var btnDeposito = document.getElementById("btn-deposito")
    var btnRetiro = document.getElementById("btn-retirar")
    var btnSaldo = document.getElementById("btn-saldo")
    
    
    function suma () {
        var suma = cuentas.saldo + cajaDeposito.valueAsNumber
        if (suma > 990) {
            alert("Tu saldo no puede ser mayor a $990")
        } else {
            alert("Tu nuevo saldo es $" + suma)
            cuentas.saldo = suma
        }
    
    }
    
    function resta () {
        var resta = cuentas.saldo - cajaRetiro.valueAsNumber
        if (resta < 10) {
            alert("Tu saldo no puede ser menor a $10")
        } else {
            alert("Tu nuevo saldo es $" + resta)
            cuentas.saldo = resta
        }
    }
    
    function saldoActual () {
        alert("Tu saldo actual es $" + cuentas.saldo)
    }
    
    btnDeposito.addEventListener("click", suma)
    btnRetiro.addEventListener("click", resta)
    btnSaldo.addEventListener("click", saldoActual)