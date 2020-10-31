const cipher = {
  // ...
};

export default cipher;

const tamAlfabeto = 26; 

let textoCodigoASC = String.charcodeAt(document.getElementById("textoEntrada"));

let deslocamento = document.getElementById("valorOffset");


let textoCifradoCodigoASC = ((Number(textoCodigoASC) + Number(document.getElementById(valorOffset))) % tamAlfabeto) + Number(document.getElementById(valorOffset));



let saidaTexto = String.fromCharCode(textoCifradoCodigoASC);

saidaTexto.innerHTML =  