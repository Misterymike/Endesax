function calcularPoupanca() {
    let valorFatura = document.getElementById("fatura").value;
    let poupanca = (valorFatura * 0.30).toFixed(2);
    document.getElementById("resultado").innerText = `⚡ Com a Endesa, pode poupar aproximadamente ${poupanca}€ na sua fatura!`;
}

// Chatbot Simples
document.getElementById("chatbotBtn").addEventListener("click", function() {
    document.getElementById("chatbotContainer").classList.toggle("hidden");
});

function enviarMensagem() {
    let chatInput = document.getElementById("chatInput").value;
    let chatMessages = document.getElementById("chatMessages");

    let userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>Você:</strong> ${chatInput}`;
    chatMessages.appendChild(userMessage);

    let resposta = document.createElement("p");
    if (chatInput.toLowerCase().includes("adesão")) {
        resposta.innerHTML = `<strong>Assistente:</strong> Pode aderir clicando no botão "Aderir Agora".`;
    } else {
        resposta.innerHTML = `<strong>Assistente:</strong> Não entendi. Poderia reformular?`;
    }
    chatMessages.appendChild(resposta);

    document.getElementById("chatInput").value = "";
}

// Envio do formulário para email (Precisa de backend)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Seus dados foram enviados com sucesso!");
});
