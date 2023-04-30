
/*mi textArea de ingreso*/
const mensajeContent = document.getElementById("mensaje"),
/*mi textArea de egreso */
mensajeContentResult = document.getElementById("mensajeResult"),
/*boton encriptar*/
           btnEncrpt = document.getElementById("btnEncript"),
/*boton desencriptar*/
        btnDesencrpt = document.getElementById("btnDesEncript"),
/*boton copiar*/
             btnCopy = document.getElementById("btnCopiar"),
/* mi titulo*/
             miTitle = document.getElementById("titleCopiar"),
/*declaracion de vocales*/
               vocal = ["e", "i", "a", "o", "u"],
/*declaracion de vocales encriptadas*/              
     vocalEncriptada = ["enter", "imes", "ai", "ober", "uber"];
       

/*FUNCION  ENCRIPTAR TEXTO*/
btnEncrpt.addEventListener("click",encriptarTexto);
  function encriptarTexto(){
      //obtengo el mensaje original desde el textArea de ingreso
    let mensajeOrig = mensajeContent.value;
    let texto = mensajeOrig;
    clearText();
    for(let i = 0; i< vocal.length; i++){
          texto = texto.replaceAll(vocal[i], vocalEncriptada[i]);
        }
      //muestro resultado en el textArea de egreso  
       mensajeContentResult.value=texto;
}

/*FUNCION  DESENCRIPTAR TEXTO*/
btnDesencrpt.addEventListener("click",descriptarTexto);
 function descriptarTexto(){
     //obtengo el mensaje original 
    let mensajeOrig = mensajeContent.value;
    let restexto = mensajeOrig;
    clearText();
    for(let i = 0; i< vocal.length; i++){
          restexto = restexto.replaceAll(vocalEncriptada[i], vocal[i]);
      }
     //muestro resultado en el textArea de egreso  
      mensajeContentResult.value=restexto;
}

/*FUNCION COPIAR TEXTO*/
btnCopy.addEventListener("click",copiarTexto);
function copiarTexto(){
      if(mensajeContentResult.value != ""){
        mensajeContentResult.select();
        document.execCommand("copy");
       navigator.clipboard.writeText(mensajeContentResult.value);
       }
        else{
            alert("No hay texto a copiar");
        }

}

/*FUNCION PARA BORRAR DESPUES DE CARGAR TXT*/
 function clearText() {
  // we use getElementById method to select the text input and than change its value to an empty string 
    document.getElementById("mensaje").value = "";
}