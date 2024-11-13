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

https://create.kahoot.it/share/gaming-legends-quiz/3e8ac474-7c57-4288-ab4b-7a49c45b4070