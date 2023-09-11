const cuentas = [
    {
        usuario: "Victor",
        password: "123",
    },
    {
        usuario: "Lupe",
        password: "67890",
    },
    {
        usuario: "Pepe",
        password: "12345",
    }
]

const user = document.getElementById("user");
const pwd = document.getElementById("pwd");
const myBtn = document.getElementById("myBtn");

//NO ME FUNCIONA.... ya me funcionó...
function validacion() {
    // Iterar a través del array de usuarios
    for (let i = 0; i < cuentas.length; i++) {
      // Comprobar si el usuario y la contraseña coinciden
      if (cuentas[i].usuario === user.value && cuentas[i].password === pwd.value) {
        var aceptado = 
        alert("Bienvenido/a " + user.value)
        //abrir ventana con el nombre del usuario aceptado
        window.open("../html/"+user.value+".html")
      } else { 
        alert("Credenciales inválidas, inténtelo otra vez")
        
      }
    }
}

myBtn.addEventListener("click", validacion)



