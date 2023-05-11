
function encriptarTexto (encriptar){
  var encriptar = document.getElementById('desencriptado').value;
  encriptar = encriptar.toLowerCase().split('');
  
  for (i = 0; i < encriptar.length; i ++){

      if (encriptar[i] == 'a') {
          encriptar.splice([i],1, 'ai');
      }
      
      if (encriptar[i] == 'e'){
          encriptar.splice([i],1, 'enter');
      }
      
      if (encriptar[i] == 'i'){
          encriptar.splice([i],1, 'imes');
      }
      
      if (encriptar[i] == 'o'){
          encriptar.splice([i],1, 'ober');
      }
      
      if (encriptar[i] == 'u'){
          encriptar.splice([i],1, 'ufat');
      }

  }

      encriptar = encriptar.join('');
      mostrarTexto('encriptado', encriptar);
      limpiarTextoArea('desencriptado');
}

function desencriptarTexto(decodificar){
        
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
      mostrarTexto('desencriptado' , decodificar);
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



window.addEventListener('load', function(){
    function validarBoton(event) {
        let textoEncriptado = "";
        let textoDesencriptado = "";
        if (event.target.id === "btn-encripta") {
            encriptarTexto(textoEncriptado);
        } else if (event.target.id === "btn-desencripta") {
            desencriptarTexto (textoDesencriptado);
        }
    }

    //Agregar funcion a cada boton
    document.getElementById("btn-encripta").addEventListener("click", validarBoton);
    document.getElementById("btn-desencripta").addEventListener("click", validarBoton);
});

