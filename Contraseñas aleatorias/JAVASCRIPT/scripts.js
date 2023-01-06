const button = document.getElementById("generar").addEventListener("click", generar);
const button2 = document.getElementById("copiar").addEventListener("click", letrero);
var copiar = document.querySelector(".copiado");
 
function generar() {

  var checkbox = document.getElementById("checkNum").checked;
  var checkbox2 = document.getElementById("checkSimb").checked;
  var keys = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  
  if (checkbox == true && checkbox2 == true) {
    keys = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM01234567891234567890$%&/_-¡?¿.<>$%&/_-¡?¿.<>01234567891234567890$%&/_-¡?¿.<>$%&/_-¡?¿.<>";
  } else if (checkbox == true) {
    keys = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789123456789001234567891234567890";
  } else if (checkbox2 == true) {
    keys = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM$%&_-¡?¿.<>$%&_-¡?¿$%&_-¡?¿$%&_-¡?¿";
  }

  let = cantidadKeys = keys.length;
  

  let = newPassWord = "";
  for (var i = 0; i < document.getElementById("range").value; i++) {
    let newPass = keys.charAt(Math.random() * cantidadKeys);
    newPassWord = newPass + newPassWord;
  }
    var text = document.getElementById("password").value = newPassWord;
}

function letrero() {
  copiar.classList.toggle("copiadot");
  setTimeout(function(){
    copiar.classList.remove("copiadot");
  }, 1000);
}










   
