//Declaracion del objeto cipher
const cipher = {
  /*Funcion que codifica la frase ingresada por el usuario utilizando cifrado Cesar 
  parametro offset=desplazamiento frase=el string ingresado*/
  encode : function(offset,frase){
    let desplazamiento = offset;
    let frase_ingresada = frase;
    let cantidad_letras = frase_ingresada.length;
    let contador_letras = 0;
    let nueva_frase = "";
    while(contador_letras<cantidad_letras){
      let posicion_ascii = 0;
      let posicion_nueva = 0;
      let nueva_letra = "";
      posicion_ascii = frase_ingresada.charCodeAt(contador_letras);
      posicion_nueva = ((posicion_ascii-65)+desplazamiento)%26 + 65;
      nueva_letra = String.fromCharCode(posicion_nueva);
      nueva_frase = nueva_frase + nueva_letra;
      contador_letras++;      
    }
    alert(nueva_frase);    
  },
  /*Funcion que decodifica la frase ingresada por el usuario utilizando cifrado Cesar*/
  decode : function(offset,frase){
    let desplazamiento = offset;
    let frase_ingresada = frase;
    let cantidad_letras = frase_ingresada.length;
    let contador_letras = 0;
    let nueva_frase = "";
    while(contador_letras<cantidad_letras){
      let posicion_ascii = 0;
      let posicion_nueva = 0;
      let nueva_letra = "";
      posicion_ascii = frase_ingresada.charCodeAt(contador_letras);
      posicion_nueva = ((posicion_ascii-65)-desplazamiento)%26 + 65;
      nueva_letra = String.fromCharCode(posicion_nueva);
      nueva_frase = nueva_frase + nueva_letra;
      contador_letras++;      
    }
    alert(nueva_frase);    
  }
};
export default cipher;
