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
//const entered_phrase = '';
start_button.addEventListener("click", () =>{
  first_window.classList.add("hidden");
  second_window.classList.add ("show");
});
encode_button.addEventListener("click", () => {
  console.log(Number(entered_phrase.value));
  if((entered_phrase.value!=="")&& (Number(offset.value)!== NaN)&&(Number(entered_phrase.value)!== NaN)){
    //llamamos la funcion encode
    
    let new_phrase = cipher.encode(offset.value, entered_phrase.value);
    second_window.classList.add ("hidden");
    document.getElementById("encode_phrase").innerHTML = new_phrase;
    document.getElementById("encode_phrase").value = new_phrase;
    third_window.classList.add ("show");
  }else{
    window.alert("La frase solo puede contener letras y ")
  }
});
decode_button.addEventListener("click", () => {
  phrase_to_decode = document.getElementById("encode_phrase");
  //Llamamos a la funcion decode
  phrase_initial = cipher.decode(offset.value,phrase_to_decode.value);
  third_window.classList.add ("hidden");
  document.getElementById("decode_phrase").innerHTML = phrase_initial;
  fourth_window.classList.add ("show");
});
reload_button.addEventListener("click", () => {  
  fourth_window.classList.add ("hidden");
  window.location.reload();
  first_window.classList.add ("show");
});