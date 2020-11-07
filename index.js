import cipher from './cipher.js';


const botaoCifrar = document.getElementById("botaoCifrar");
botaoCifrar.addEventListener("click", encode);

const botaoDecifrar = document.getElementById("botaoDecifrar");
botaoDecifrar.addEventListener("click", decode);

   
   function encode(offset, entradaMaiuscula){
      entradaMaiuscula;
      offset;
      entradaMaiuscula = document.getElementById("textoEntrada").value.toUpperCase();
      offset = Number(document.getElementById("barraOffset").value);
      document.getElementById("textoSaida").innerHTML = cipher.encode(offset,entradaMaiuscula); 
     
   }


   function decode(offset, entradaMaiuscula){
      entradaMaiuscula;
      offset;
      entradaMaiuscula = document.getElementById("textoEntrada").value.toUpperCase(); 
      offset = Number(document.getElementById("barraOffset").value);
      document.getElementById("textoSaida").innerHTML = cipher.decode(offset,entradaMaiuscula); 
   }
   
    
const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", copiarTexto);

   function copiarTexto() {
      let  copia = document.getElementById("textoSaida").value; 
      navigator.clipboard.writeText(copia);
   }

   console.log(cipher);