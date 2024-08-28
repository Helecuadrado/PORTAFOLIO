functionencriptar() {
    let texto = document.getElmentById ("texto").Value;
    let titulomensaje = document.getElmentById ("titulo-mensaje;")
    lef parrafo = document.getElmentById ("parrafo");
    lef muñeco = document.getElmentById ("muñeco");
    let texttocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")           
        .replace(/a/gi, "ai")
        .replace(/O/gi, "ober")
        .replace(/u/gi, "ufat")
     if (document.getElmentById (texto).value.length !=0) {
        document.getElmentById = ("texto").value = texttocifrado;
        document.getElmentById ("titulomensaje").texContent = "titulo encriptado con éxito"
        document.getElmentById.texContent ="";
        document.getElmentById ("muñeco").src = "./img/encriptado.jpg";
     }else {
        muñeco.src = "./img/muñeco.npg";
        alert ("Debes ignorar algún texto");
     }
}