// Función para verificar si una cadena de texto contiene únicamente letras minúsculas y caracteres permitidos.
function textoMinusculas(text) {
    //Verifica si el carácter actual es una letra minúscula o un carácter permitido.
    for (let i = 0; i < text.length; i++) {
        if (((text[i] >= 'a' && text[i] <= 'z') || text[i] === ' ')) {
            return true; // Devolver verdadero si todos los caracteres son permitidos
        }
    }
    // Devolver falso si se encuentra un carácter no permitido
    return false;
}
// Función para encriptar el texto ingresado.
function encriptadorDeTexto() {
    let texto = document.getElementById("tEncriptado").value;
    let textoEncriptado = "";
    if (textoMinusculas(texto)) {
        textoEncriptado = texto.replace(/e/gm, "enter")
                                   .replace(/i/gm, "imes")
                                   .replace(/a/gm, "ai")
                                   .replace(/o/gm, "ober")
                                   .replace(/u/gm, "ufat");
    } else {
        alert("Ingresar solo letras minúsculas y caracteres permitidos");
        return; 
    }
     // Muestra el texto encriptado en un elemento HTML.
    document.getElementById("resultadoTexto").innerHTML = textoEncriptado;
    // Muestra y activa los botones "Copiar" y "Limpiar".
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("limpiar").style.display = "show";
    document.getElementById("limpiar").style.display = "inherit";

}
// Función para desencriptar el texto ingresado.
function desencriptadorDeTexto() {
    
    let texto = document.getElementById("tDesencriptado").value;
    let textoEncriptado = "";
    if (textoMinusculas(texto)) {
        textoEncriptado = texto.replace(/enter/gm, "e")
                                   .replace(/imes/gm, "i")
                                   .replace(/ai/gm, "a")
                                   .replace(/ober/gm, "o")
                                   .replace(/ufat/gm, "u");
    } else {
        alert("Ingresar solo letras minúsculas y caracteres permitidos");
        return; 
    }
    document.getElementById("resultadoTexto").innerHTML = textoEncriptado;
}
// Función para copiar el texto encriptado/desencriptado al portapapeles.
function textCopy(){
    
    let textoCopiar = "";
    textoCopiar = document.getElementById("resultadoTexto");
    textoCopiar.select();
    document.execCommand("copy");
}
// Función para limpiar los campos de entrada y salida.
function limpiar(){
    // Restablece los valores de los campos de entrada y salida a su estado inicial (vacío).
    document.getElementById("tEncriptado").value = "";
    document.getElementById("tDesencriptado").value = "";
    document.getElementById("resultadoTexto").value = "";
}

