//import cipher from './cipher.js';

//console.log(cipher);






const botaoCifrar = document.getElementById("botaoCifrar");
botaoCifrar.addEventListener("click", capturarTexto)

function capturarTexto(params) {
   let entradaTexto = document.getElementById("textoEntrada").value; 
   let entradaMaiuscula = entradaTexto.toUpperCase();
   document.getElementById("textoSaida").innerHTML= entradaMaiuscula;
   console.log(entradaMaiuscula);
}

const botaoDecifrar = document.getElementById("botaoDecifrar");
botaoDecifrar.addEventListener("click", devolverTexto)

function devolverTexto(params) {
   let entradaTexto = document.getElementById("textoEntrada").value; 
   let entradaMaiuscula = entradaTexto.toUpperCase();
   document.getElementById("textoSaida").innerHTML= entradaMaiuscula;
   console.log(entradaMaiuscula);
}

//let tamTexto = textoMaiusculo.lenght();





//const tamAlfabeto = 26; 

//let offset = document.getElementById("valorOffset");


//let textoCifradoCodigoASC = ((Number(textoCodigoASC) + Number(offset)) % tamAlfabeto) + Number(textoCodigoASC);

//let saidaTexto = String.fromCharCode(textoCifradoCodigoASC);

//saidaTexto.innerHTML -