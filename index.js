// import cipher from './cipher.js';

//  console.log(cipher);

const tamAlfabeto = Number(26);
let textoCodigoASC;

let offset;
let entradaTexto; 
let entradaMaiuscula;
let tamTexto;

const botaoCifrar = document.getElementById("botaoCifrar");
botaoCifrar.addEventListener("click", encode);


   function encode(){
      
      entradaTexto = document.getElementById("textoEntrada").value;
      entradaMaiuscula = entradaTexto.toUpperCase();
      tamTexto = Number(entradaMaiuscula.length);
      offset = Number(document.getElementById("barraOffset").value);
      let saidaTexto ="";

      for (let contador=0; contador < tamTexto; contador++){
     
         textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
        
         saidaTexto += String.fromCharCode(((textoCodigoASC + offset - 65) % tamAlfabeto) + 65);
         document.getElementById("textoSaida").innerHTML= saidaTexto;
         console.log(saidaTexto);
         
      }
         return saidaTexto;
   //document.getElementById("textoSaida")
   }



const botaoDecifrar = document.getElementById("botaoDecifrar");
botaoDecifrar.addEventListener("click", decode);


   function decode(){
   
      entradaTexto = document.getElementById("textoEntrada").value; 
      entradaMaiuscula = entradaTexto.toUpperCase();
      tamTexto = Number(entradaMaiuscula.length);
      offset = Number(document.getElementById("barraOffset").value);
      let saidaTexto ="";
      
    for (let contador=0; contador < tamTexto; contador++){

       textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 

       if (textoCodigoASC >=65 && textoCodigoASC <=90){

         saidaTexto += String.fromCharCode((((textoCodigoASC - offset - 65) % tamAlfabeto)*-1) + 65);
       }
       if (textoCodigoACSC == 32) {
         saidaTexto = saidaTexto.replace(32, " ");
          
       }
       else {
         document.getElementById("textoSaida").innerHTML = "Erro! Use somente letras na sua mensagem";
       }
        
        
       }
      
      document.getElementById("textoSaida").innerHTML = saidaTexto; 
      console.log(saidaTexto);
      return saidaTexto;
   }
   
    

const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
   let  copia = document.getElementById("textoSaida").value; 
   
   console.log(copia);
}