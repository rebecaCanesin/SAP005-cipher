const cipher = {

    encode: function (offset, entradaMaiuscula) {
        entradaMaiuscula;
        offset;
        let tamTexto = Number(entradaMaiuscula.length);
        const tamAlfabeto = Number(26);
        let textoCodigoASC;
        let saidaTexto ="";
      
        for (let contador=0; contador < tamTexto; contador++){
     
            textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 

            if (textoCodigoASC >=65 && textoCodigoASC <=90){

                saidaTexto += String.fromCharCode(((textoCodigoASC + offset - 65) % tamAlfabeto) + 65);
            }
         
            else{
           
              saidaTexto += entradaMaiuscula.charAt(contador);  
            }
        }
        return saidaTexto;
    },
 

    decode: function (offset, entradaMaiuscula){
        entradaMaiuscula;
        offset;
        let tamTexto = Number(entradaMaiuscula.length);
        const tamAlfabeto = Number(26);
        let textoCodigoASC;
        let saidaTexto ="";

        for (let contador=0; contador < tamTexto; contador++){

            textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
 
            if (textoCodigoASC >=65 && textoCodigoASC <=90){
 
                saidaTexto += String.fromCharCode ((((textoCodigoASC + (tamAlfabeto - offset)% tamAlfabeto) - 65) % tamAlfabeto) +65);
            }

            else {
                saidaTexto += entradaMaiuscula.charAt(contador);
            }
        }
        return saidaTexto;
    }

}
  
 

export default cipher;
