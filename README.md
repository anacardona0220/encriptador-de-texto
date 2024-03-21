# Encriptador y Desencriptador de Texto

Este proyecto consta de dos funciones principales: una para encriptar texto y otra para desencriptarlo. Ambas funciones operan únicamente con letras minúsculas y caracteres permitidos, como espacios en blanco, puntos, comas y punto y coma.

## Funcionalidades

### Encriptador de Texto

La función `encriptadorDeTexto()` encripta el texto ingresado utilizando las siguientes conversiones:

- La letra "e" se convierte en "enter".
- La letra "i" se convierte en "imes".
- La letra "a" se convierte en "ai".
- La letra "o" se convierte en "ober".
- La letra "u" se convierte en "ufat".

### Desencriptador de Texto

La función `desencriptadorDeTexto()` desencripta el texto encriptado utilizando las conversiones inversas.

### Copiar Texto

La función `textCopy()` copia el texto encriptado/desencriptado al portapapeles.

### Limpiar Texto

La función `limpiar()` limpia los campos de entrada y salida.

## Uso

1. Ingrese el texto en el campo de entrada correspondiente.
2. Haga clic en el botón "Encriptar" para encriptar el texto o "Desencriptar" para desencriptarlo.
3. Si lo desea, puede copiar el texto encriptado/desencriptado haciendo clic en el botón "Copiar".
4. Para limpiar los campos, haga clic en el botón "Limpiar".

## Advertencia

Se requiere ingresar solo letras minúsculas y caracteres permitidos (espacios en blanco, puntos, comas y punto y coma). Si se ingresan caracteres no permitidos, se mostrará una alerta y no se realizará la operación.
