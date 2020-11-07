const cipher = {

    encode: function (offset, entradaMaiuscula) {

        if ( offset==null || offset=="" || offset ==0 || entradaMaiuscula==null || entradaMaiuscula=="") {
            throw new TypeError ('parametros da função errados', "cipher.js", 6);  
        } 

        else{

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
        }
    
    },
 

    decode: function (offset, entradaMaiuscula){

        if ( offset==null || offset=="" || offset ==0 || entradaMaiuscula==null || entradaMaiuscula=="") {
            throw new TypeError ('parametros da função errados', "cipher.js", 43);  
        } 

        else{

            entradaMaiuscula;
            offset;
            let tamTexto = Number(entradaMaiuscula.length);
            const tamAlfabeto = Number(26);
            let textoCodigoASC;
            let saidaTexto ="";
            let novoOffset = Number(Math.abs(tamAlfabeto - offset %tamAlfabeto));
            for (let contador=0; contador < tamTexto; contador++){

                textoCodigoASC = entradaMaiuscula.charCodeAt(contador); 
            
 
                if (textoCodigoASC >=65 && textoCodigoASC <=90){
 
                    saidaTexto += String.fromCharCode (((textoCodigoASC + novoOffset - 65) % tamAlfabeto) +65);
                }

                else {
                    saidaTexto += entradaMaiuscula.charAt(contador);
                }
            }
            return saidaTexto;
        }
        
    }

}
  
 

export default cipher;
