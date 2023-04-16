
var valor;

function encriptarTexto (){
    var valor = document.getElementById('texto').value;
    valor = valor.toLowerCase().split('');
    
    for (i = 0; i < valor.length; i ++){
    // var encriptado = [];
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
    
    var encriptado = valor;
    document.getElementById('encriptado').innerHTML = encriptado;
    }
}


function mostrarTexto(){
    document.getElementById('encriptado').innerHTML = valor;
}

