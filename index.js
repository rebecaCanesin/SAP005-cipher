// import cipher from './cipher.js';

//  console.log(cipher);

const tamAlfabeto = Number(26);

let textoCodigoASC;
let saidaTexto ="";
let offset = Number(document.getElementById("barraOffset").value);
let entradaTexto; 
let entradaMaiuscula;
let tamTexto;

const botaoCifrar = document.getElementById("botaoCifrar");
botaoCifrar.addEventListener("click", encode);


   function encode(){
      
      entradaTexto = document.getElementById("textoEntrada").value;
      entradaMaiuscula = entradaTexto.toUpperCase();
      tamTexto = Number(entradaMaiuscula.length);
      
      for (let contador=0; contador < tamTexto; contador++){
     
         textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
        
         saidaTexto += String.fromCharCode(((textoCodigoASC + offset - 65) % tamAlfabeto) + 65);
         document.getElementById("textoSaida").innerHTML= saidaTexto;
         console.log(saidaTexto);
         
      
           
      }
         
   //document.getElementById("textoSaida")
   }



const botaoDecifrar = document.getElementById("botaoDecifrar");
botaoDecifrar.addEventListener("click", decode);


   function decode(){
   
      entradaTexto = document.getElementById("textoEntrada").value; 
      entradaMaiuscula = entradaTexto.toUpperCase();
      tamTexto = Number(entradaMaiuscula.length);
   
    for (let contador=0; contador < tamTexto; contador++){

       textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
       
        saidaTexto += String.fromCharCode((((textoCodigoASC - offset - 65) % tamAlfabeto)*-1) + 65);
        document.getElementById("textoSaida").innerHTML= saidaTexto; 
      
       }

       
   }
   
    

const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
   let  copia = document.getElementById("textoSaida").value; 
   
   console.log(copia);
}