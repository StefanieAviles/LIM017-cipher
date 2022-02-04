import cipher from './cipher.js';
const boton_comenzar = document.getElementById("Btn1");
boton_comenzar.addEventListener("click", () =>{
  //llamamos la funcion encode
  cipher.encode(5,"FGHI");
});
//Llamamos a la funcion decode
//cipher.decode();