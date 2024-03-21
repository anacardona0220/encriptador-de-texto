//en esta funcion lo que haremos es adaptar el codigo para que solo acepte letras minusculas,espacios en blanco, punto, coma y punto y coma//
function textoMinusculas(text) {
    for (let i = 0; i < text.length; i++) {
        if (((text[i] >= 'a' && text[i] <= 'z') || text[i] === ' ')) {
            return true; // Devolver verdadero si todos los caracteres son permitidos
        }
    }
    // Devolver falso si se encuentra un carácter no permitido
    return false;
}
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

    document.getElementById("resultadoTexto").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("limpiar").style.display = "show";
    document.getElementById("limpiar").style.display = "inherit";

}

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

function textCopy(){
    
    let textoCopiar = "";
    textoCopiar = document.getElementById("resultadoTexto");

    textoCopiar.select();
    document.execCommand("copy");
}

function limpiar(){
    document.getElementById("tEncriptado").value = "";
    document.getElementById("tDesencriptado").value = "";
    document.getElementById("resultadoTexto").value = "";
}

