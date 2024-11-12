CODE JAVA

document.getElementById("botao-memoria").addEventListener("click", function () {
  var memoriaTexto = document.getElementById("entrada-memoria").value;
  if (memoriaTexto.trim() !== "") {
    var novoBalao = document.createElement("div");
    novoBalao.classList.add("balao-memoria");
    novoBalao.textContent = memoriaTexto;

    document.getElementById("balao-memoria-container").appendChild(novoBalao);
    document.getElementById("entrada-memoria").value = "";
  }
});
