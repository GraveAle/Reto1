

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
        mostrarTexto(valor);

        limpiarTextoArea();
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
    }

    console.log(decodificar);

}

// Funciones para limpiar pantalla
function mostrarTexto(txt){
    document.getElementById('encriptado').innerHTML = txt;
}

function limpiarTextoArea (){
    document.getElementById('texto').value = "";
}

