//import cipher from './cipher.js';

//console.log(cipher);

let entradaTexto = document.getElementById("textoEntrada");

let textoMaiusculo = entradaTexto.toUpperCase();

let tamTexto = textoMaiusculo.lenght();





const tamAlfabeto = 26; 

let offset = document.getElementById("valorOffset");


let textoCifradoCodigoASC = ((Number(textoCodigoASC) + Number(offset)) % tamAlfabeto) + Number(textoCodigoASC);

let saidaTexto = String.fromCharCode(textoCifradoCodigoASC);

saidaTexto.innerHTML 