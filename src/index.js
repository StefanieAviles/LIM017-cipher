import cipher from './cipher.js';
const start_button = document.getElementById("Btn1");
const first_window = document.getElementById("first_window");
const second_window = document.getElementById("second_window");
const third_window = document.getElementById("third_window");
const fourth_window = document.getElementById("fourth_window");
const encode_button = document.getElementById("Btn2");
const decode_button = document.getElementById("Btn3");
const reload_button = document.getElementById("Btn4");
let entered_phrase = document.getElementById("phrase");
let offset = document.getElementById("displacement");
let phrase_to_decode = "";
let phrase_initial = "";
let array_ascii = [];
let cont_array_ascii = 0;
//Le doy funcionalidad al boton Comenzar
start_button.addEventListener("click", () =>{
  first_window.classList.add("hide");
  document.getElementById("intro_window").classList.add("show");
});
document.getElementById("open").addEventListener("click", () =>{
  document.getElementById("intro_window").classList.remove("show");
  second_window.classList.add ("show");
});
//Bucle que llena un arreglo con los ascii permitidos, para la frase ingresada
while(cont_array_ascii<26){
  array_ascii[cont_array_ascii] = 65+cont_array_ascii;
  cont_array_ascii ++;
}
//Funcion que valida si el texto ingresado es valido, que solo sean letras y que no este vacio
function isValid_text(sentence){
  let cont_letters = 0;
  let not_allowed=0;
  while(cont_letters < sentence.length){
    let cont = 0;
    while(array_ascii[cont] !== sentence.charCodeAt(cont_letters) && cont < 26){
      cont ++
      if(cont === 26){
        not_allowed ++;
      }
    }
    cont_letters++;
  }
  if(not_allowed > 0 || sentence.length === 0){
    return false;
  } else {    
    return true;
  }
}
//Funcion que valida que el numero ingresado solo sea entero y que no este vacio
function isValid_number(sentence){
  let cont_numbers = 0;
  let not_allowed=0;  
  while (cont_numbers< sentence.length){
    let cont = 0;
    while(sentence.charCodeAt(cont_numbers) !== (48+cont) && cont < 10){
      cont ++;
      if(cont === 10){
        not_allowed ++;
     }
    }    
    cont_numbers++;
  }
  if(not_allowed > 0 || sentence.length === 0 || Number(sentence)===0 || Number(sentence)>100){
    return false;
  } else {    
    return true;
  }
}
//Damos funcionalidad al boton Codificar evaluando si se cumplen las validaciones
encode_button.addEventListener("click", () => { 
  //Si no es valido el texto pinta la caja de texto de rojo e indica el error
  if(!isValid_text(entered_phrase.value)){
    entered_phrase.classList.add("error");
    document.getElementById("label_text").innerHTML = "Solo se aceptan letras mayúsculas sin espacios";
  }else{
    document.getElementById("phrase").classList.remove("error");
    document.getElementById("label_text").innerHTML = " ";
  }
  //Si no es valido el desplazamiento pinta la caja de texto de rojo e indica el error
  if(!isValid_number(offset.value)){
    offset.classList.add("error");
    document.getElementById("label_number").innerHTML = "Solo se aceptan numeros enteros del 1 al 100";
  }else{
    document.getElementById("displacement").classList.remove("error");
    document.getElementById("label_number").innerHTML = " ";
  }
  //Si ambos valores estan correctos muestra la siguiente ventana y llama la funcion encode
  if(isValid_text(entered_phrase.value)&& isValid_number(offset.value)){
    let new_phrase = cipher.encode(offset.value, entered_phrase.value);
    second_window.classList.remove ("show");
    document.getElementById("encode_phrase").innerHTML = new_phrase;      
    document.getElementById("encode_phrase").value = new_phrase;      
    third_window.classList.add ("show");
  }
});
//Damos funcionalidad al boton Decodificar
decode_button.addEventListener("click", () => {
  phrase_to_decode = document.getElementById("encode_phrase");
  //Llamamos a la funcion decode
  phrase_initial = cipher.decode(offset.value,phrase_to_decode.value);
  third_window.classList.remove ("show");
  document.getElementById("decode_phrase").innerHTML = phrase_initial;
  fourth_window.classList.add ("show");
});
//Damos funcionalidad al boton Regresar al inicio
document.getElementById("Return").addEventListener("click", () => {
  third_window.classList.remove ("show");
  window.location.reload();
  first_window.classList.add ("show");
})
//Por medio del boton Generar nueva clave regresa al inicio
reload_button.addEventListener("click", () => {  
  fourth_window.classList.remove ("show");
  window.location.reload();
  first_window.classList.add ("show");
});