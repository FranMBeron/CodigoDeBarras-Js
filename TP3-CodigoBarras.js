function lector()
{
    var i,f,codigoBarras,suma = 0;
    codigoBarras = new Array(5);

    //codigoBarras[0]='65839522'
    //codigoBarras[1]='65839521'
    //codigoBarras[2]='8414533043847'
    //codigoBarras[3]='5029365779425'
    //codigoBarras[4]='5129365779425'
    //codigoBarras[5]='0'

    //Para cargar los codigos de barra.
    for (i = 0 ; i <codigoBarras.length; i++) {
        var v;
        v = prompt ('ingrese el codigo de barras con el verificador: ');
        codigoBarras[i] = v;
    }

    //Para que recorra el array buscando los codigos EAN13 o EAN8.
    for (var z = 0; z < codigoBarras.length; z++) {
        console.log('---- PROCESANDO: ' + codigoBarras[z] + '----')
        if (codigoBarras[z].length<8 || codigoBarras[z].length>13){
            document.write("NO");
            break;
        } 
        suma = 0;
            //Para empezar del anteultimo para adelante.
            var parimpar = 0
            for (f = codigoBarras[z].length ; f > 1 ; f--){
                parimpar ++
                //Si es par o impar y que lo sume
                if (parimpar%2 == 0) {
                    console.log('Posicion: ' + (f-1) + " - Digito:" + codigoBarras[z][f-2] + ' - Multiplico por 1')
                    var multiplicacion = codigoBarras[z][f-2]*1;
                    console.log('Resultado: ' + multiplicacion)
                    
                    suma = suma + multiplicacion
                    console.log('Suma actual: ' + suma)
                    
                }
                else {
                    if (parimpar%2 != 0) {
                        console.log('Posicion: ' + (f-1) + " - Digito:" + codigoBarras[z][f-2] + ' - Multiplico por 3')
                        var multiplicacion = codigoBarras[z][f-2]*3;
                        console.log('Resultado: ' + multiplicacion)
                        
                        suma = suma + multiplicacion
                        console.log('Suma actual: ' + suma)
                    }
                }
            }

            
            console.log('Digito verificador ' + codigoBarras[z][codigoBarras[z].length-1])

            //Para verificar el digito de comprobación
            //Ya que si todos los numeros dan un multiplo de 10 el codigo de comprobación tiene que ser 0)
            if (suma%10 == 0 && codigoBarras[z][codigoBarras[z].length-1] == 0) {
                console.log('---- RESULTADO PARA ' + codigoBarras[z] + ': SI ---')
                document.write("SI");
            } else {
                var diferencia
                diferencia = 10 - (suma%10);
                if (diferencia == codigoBarras[z][codigoBarras[z].length-1]) {
                    console.log('---- RESULTADO PARA ' + codigoBarras[z] + ': SI ---')
                    document.write("SI");
                }
                else {
                    console.log('---- RESULTADO PARA ' + codigoBarras[z] + ': NO ---')
                    document.write("NO");
                }
            }
        

        if(codigoBarras[z].length > 8){
                var pais = ""

                var prefix = codigoBarras[z].substring(0,1)
                if (prefix == '0'){
                    pais = 'EEUU';
                }

                if (pais == ""){
                    prefix  = codigoBarras[z].substring(0,2)
                   switch ( prefix ) {
                        case '50':
                            pais = 'Inglaterra';
                            break;
                        case '70':
                            pais = 'Noruega';
                            break;
                    }
                }

                if (pais == ""){
                    prefix  = codigoBarras[z].substring(0,3)
                    switch ( prefix ) {
                            case '380':
                            pais = 'Bulgaria';
                                    break;
                            case '539':
                            pais = 'Irlanda';
                                    break;
                            case '560':
                            pais = 'Portugal';
                                    break;
                            case '759':
                            pais = 'Venezuela';
                                    break;
                            case '850':
                            pais = 'Cuba';
                                    break;
                            case '890':
                            pais = 'India';
                            break;
                    }
                } 

                if (pais != ""){
                    document.write(' '+pais);
                    console.log('*** PAIS: '+ pais +' ***')
                } else {                  
                    document.write(' Desconocido');
                }
            
        }
        document.write('<br>');
    }
    }
document.write(lector());
