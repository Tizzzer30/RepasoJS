function verificarDatos() { 

    const UsuarioCorrecto = "FBHR";
    const ContraCorrecta = "20130012";
    
    const UsuarioIngresado = document.getElementById("usuario").value;
    const ContraIngresada = document.getElementById("contra").value; 
    
    const DivError = document.getElementById("error");
    if (UsuarioIngresado === UsuarioCorrecto && ContraIngresada === ContraCorrecta) {
        
        DivError.style.display = "none"; 
        window.location.href = "Bienvenida.html"; 
    }
    else {
        
        alert("Ha colocado algo de manera incorrecta."); 
        DivError.style.display = "none"; 
        document.getElementById("contra").value = "";
    }
}