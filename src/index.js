import cipher from './cipher.js';
//Declaracion de variables
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
//Le damos funcionalidad al boton Continuar para que me esconda la 1era ventana y me muestre la ventana de indicaciones
start_button.addEventListener("click", () =>{
  first_window.classList.add("hide");
  document.getElementById("intro_window").classList.add("show");
});
//Le damos funcionalidad al boton Comenzar para que oculte la ventana de indicaciones y muestre la siguiente ventana
document.getElementById("open").addEventListener("click", () =>{
  document.getElementById("intro_window").classList.remove("show");
  second_window.classList.add ("show");
});
//Bucle que llena un arreglo con los ascii permitidos, para la frase ingresada (el abecedario y el espacio)
while(cont_array_ascii<26){
  array_ascii[cont_array_ascii] = 65+cont_array_ascii;
  cont_array_ascii ++;
}
array_ascii[cont_array_ascii]=32;
//Funcion que verifica si el texto ingresado es valido, que solo sean letras y que no este vacio
function isValid_text(sentence){
  let cont_letters = 0;
  let not_allowed=0;
  //Bucle que controla que haga la comparacion de cada letra de la frase ingresada
  while(cont_letters < sentence.length){
    let cont = 0;
    //bucle que controla que cada letra de la frase se compare con cada letra de mi arreglo de ascii permitidos
    while(array_ascii[cont] !== sentence.charCodeAt(cont_letters) && cont < 27){
      cont ++
      //si el contador llega hasta 27 es porque no encontro coincidencias, por tanto no es un ascii permitido
      if(cont === 27){
        not_allowed ++;
      }
    }
    cont_letters++;
  }
  //condicional que verifica si hay al menos 1 caracter no permitido retorna false caso contrario retorna true
  if(not_allowed > 0 || sentence.length === 0){
    return false;
  } else {    
    return true;
  }
}
//Funcion que valida que el numero ingresado solo sea entero,que no este vacio, que no sea 0 y que sea maximo el numero 100
function isValid_number(sentence) {
  if (
    isNaN(Math.abs(Number(sentence))) ||
    !Number.isInteger(Number(sentence)) ||
    sentence.length === 0 ||
    Math.abs(Number(sentence)) > 100 ||
    Math.abs(Number(sentence) === 0)
  ) {
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
    document.getElementById("label_text").innerText = "Solo se aceptan letras";
  }else{
    //En caso que este bien el texto ingresado quita el color rojo de la caja de texto
    document.getElementById("phrase").classList.remove("error");
    document.getElementById("label_text").innerText = " ";
  }
  //Si no es valido el desplazamiento pinta la caja de texto de rojo e indica el error
  if(!isValid_number(offset.value)){
    offset.classList.add("error");
    document.getElementById("label_number").innerText = "Solo se aceptan numeros enteros del 1 al 100";
  }else{
    //En caso que este bien el numero ingresado quita el color rojo de la caja donde se ingresa el desplazamiento
    document.getElementById("displacement").classList.remove("error");
    document.getElementById("label_number").innerText = " ";
  }
  //Si ambos valores estan correctos llama la funcion encode y muestra la frase codificada en siguiente ventana
  if(isValid_text(entered_phrase.value)&& isValid_number(offset.value)){
    let new_phrase = cipher.encode(offset.value, entered_phrase.value);
    second_window.classList.remove ("show");
    document.getElementById("encode_phrase").innerText = new_phrase;      
    document.getElementById("encode_phrase").value = new_phrase;      
    third_window.classList.add ("show");
  }
});
//Damos funcionalidad al boton Decodificar que se encarga de hacer la decodificacion y mostrarla en la siguiente ventana
decode_button.addEventListener("click", () => {
  phrase_to_decode = document.getElementById("encode_phrase");
  //Llamamos a la funcion decode
  phrase_initial = cipher.decode(offset.value,phrase_to_decode.value);
  third_window.classList.remove ("show");
  document.getElementById("decode_phrase").innerText = phrase_initial;
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