//import cipher from './cipher.js';

//console.log(cipher);



const botaoCifrar = document.getElementById("botaoCifrar");
botaoCifrar.addEventListener("click", encode)


  

function encode( entradaMaiuscula,offset){
   const tamAlfabeto = 26;
   let entradaTexto = document.getElementById("textoEntrada").value; 
   offset = document.getElementById("valorOffset").value;
   entradaMaiuscula = entradaTexto.toUpperCase();
   let tamTexto = entradaMaiuscula.length;
   let textoCodigoASC;
   let saidaTexto;

   for (let contador=0; contador < tamTexto; contador++){

         textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
       
      if (textoCodigoASC >= 65 && textoCodigoASC <=90) {

         saidaTexto = String.fromCharCode(((textoCodigoASC + offset - 65) % tamAlfabeto) + textoCodigoASC);
         
      }
      document.getElementById("textoSaida").innerHTML= saidaTexto.value; 

   }
   
}
   



//const botaoDecifrar = document.getElementById("botaoDecifrar");
//botaoDecifrar.addEventListener("click", decode());


//function decode( entradaMaiuscula,offset){

   //let tamTexto = entradaMaiuscula.length;
   
  // for (let contador=0; contador < tamTexto; contador++){

   // textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
       
     // if (textoCodigoASC >= 65 && textoCodigoASC <=90) {

    //     saidaTexto = String.fromCharCode(((textoCodigoASC - offset - 65) % tamAlfabeto) + textoCodigoASC);

    //  }
      
  // }

 //  document.getElementById("textoSaida").innerHTML= saidaTexto.value; 
//}
   
    

const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
   let  copia = document.getElementById("textoSaida").value; 
   
   console.log(copia);
}