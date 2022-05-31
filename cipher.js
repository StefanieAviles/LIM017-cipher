//Declaracion del objeto cipher
const cipher = {
  /*Funcion que codifica la frase ingresada por el usuario utilizando cifrado Cesar 
  parametro offset=desplazamiento phrase=el texto ingresado*/
  encode : function(offset,phrase){
    if(typeof phrase!== "string")throw new TypeError("No ingresast una frase valida");
    if(typeof Number(offset)!== "number")throw new TypeError("No ingresast un desplazamiento valido");
    let displacement = Math.abs(Number(offset));
    let cont_letters = 0;
    let new_phrase = "";
    while(cont_letters<phrase.length){
      let ascii_position = 0;
      let new_position = 0;
      let new_letter = "";
      ascii_position = phrase.charCodeAt(cont_letters);
      if(ascii_position !== 32){
        new_position = (ascii_position-65 + displacement) % 26 + 65;
      } else{
        new_position = 32;
      }    
      new_letter = String.fromCharCode(new_position);
      new_phrase = new_phrase + new_letter;
      cont_letters++;      
    }
    return new_phrase;    
  },
  /*Funcion que decodifica la frase ingresada por el usuario utilizando cifrado Cesar
  parametro offset=desplazamiento phrase=el texto ingresado*/
  decode : function(offset,phrase){
    if(typeof phrase!== "string")throw new TypeError("No ingresast una frase valida");
    if(typeof Number(offset)!== "number")throw new TypeError("No ingresast un desplazamiento valido");
    let displacement = Math.abs(Number(offset));
    let cont_letters = 0;
    let new_phrase = "";
    while(cont_letters<phrase.length){
      let ascii_position = 0;
      let new_position = 0;
      let new_letter = "";
      ascii_position = phrase.charCodeAt(cont_letters);
      if(ascii_position !== 32){
        new_position = (ascii_position+65 - displacement) % 26 + 65;
      } else{
        new_position = 32;
      }    
      new_letter = String.fromCharCode(new_position);
      new_phrase = new_phrase + new_letter;
      cont_letters++;      
    }
    return new_phrase;    
  }
};
export default cipher;
