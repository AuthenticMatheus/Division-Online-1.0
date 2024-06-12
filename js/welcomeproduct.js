document.addEventListener("DOMContentLoaded", function() {
  var welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcome-message");
  welcomeMessage.textContent = "Bem-vindo à nossa loja! Primeiro entenda que isso é só o básico, com o passar dos dias o site irá passar por atualizações! Tudo será notificado no perfil oficial da Division.";
  document.body.appendChild(welcomeMessage);

  welcomeMessage.style.backgroundColor = "black";
  welcomeMessage.style.color = "red";

  setTimeout(function() {
    welcomeMessage.remove();
  }, 7000); // Remova a mensagem após 7 segundos (7000 milissegundos)
});

