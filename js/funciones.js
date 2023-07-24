const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', validarFormulario);
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;
    
    if(nombre.length == 0) {
      mostrarError('error-nombre', 'El nombre no puede estar vacío');
    } else {
      mostrarError('error-nombre', '');
    }
    
    if(email.length == 0) {
      mostrarError('error-email', 'El correo electrónico no puede estar vacío');
    } else if(!validarEmail(email)) {
      mostrarError('error-email', 'El correo electrónico no es válido');
    } else {
      mostrarError('error-email', '');
    }
    
    if(comentario.length == 0) {
      mostrarError('error-comentario', 'El comentario no puede estar vacío');
    } else {
      mostrarError('error-comentario', '');
    }
  }
  
  function mostrarError(id, mensaje) {
    const elemento = document.getElementById(id);
    elemento.innerHTML = mensaje;
  }
  
  function validarEmail(email) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
  }