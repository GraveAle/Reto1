

//Funcion para encriptar texto
function encriptarTexto (){
    var valor = document.getElementById('texto').value;
    valor = valor.toLowerCase().split('');
    
    for (i = 0; i < valor.length; i ++){

        if (valor[i] == 'a') {
            valor.splice([i],1, 'ai');
        }
        
        if (valor[i] == 'e'){
            valor.splice([i],1, 'enter');
        }
        
        if (valor[i] == 'i'){
            valor.splice([i],1, 'imes');
        }
        
        if (valor[i] == 'o'){
            valor.splice([i],1, 'ober');
        }
        
        if (valor[i] == 'u'){
            valor.splice([i],1, 'ufat');
        }

    }
    
        valor = valor.join('');
        mostrarTexto('encriptado' ,valor);
        limpiarTextoArea('texto');
}

//Funcion para decodificar texto

function desencriptarTexto (){
    
    var decodificar = document.getElementById('encriptado').value;
    decodificar = decodificar.toLowerCase().split('');

    for (i = 0; i < decodificar.length; i++){
        if (decodificar[i] == 'a'){
            decodificar.splice([i],1);
            decodificar.splice([i],1, 'a')
        }
        if (decodificar[i] == 'e'){
            decodificar.splice([i],1);
            decodificar.splice([i],4, 'e')
        }
        if (decodificar[i] == 'i'){
            decodificar.splice([i],1);
            decodificar.splice([i],3, 'i')
        }
        if (decodificar[i] == 'o'){
            decodificar.splice([i],1);
            decodificar.splice([i],3, 'o')
        }
        if (decodificar[i] == 'u'){
            decodificar.splice([i],1);
            decodificar.splice([i],3, 'u')
        }
    }
        
        decodificar = decodificar.join('');
        mostrarTexto('texto' , decodificar);
        limpiarTextoArea('encriptado');
    
}

//Mostrar texto codificado/decodificado
function mostrarTexto(textarea,txt){
    document.getElementById(textarea).innerHTML = txt;
}

// Funciones para limpiar pantalla
function limpiarTextoArea (limpia){
    document.getElementById(limpia).value = "";
}

