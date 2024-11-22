import React, { useState } from "react";
import "../styles/NewsletterSubscription.css"; // Importando o CSS atualizado

export default function Contact() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = () => {
    setLoading(true);
    setEmailSuccess(false);
    setErrorMessage(""); // Resetando a mensagem de erro

    const requestBody = {
      toMail: email,
      content: content,
    };

    fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          setEmailSuccess(true);
          setErrorMessage(""); // Limpar mensagem de erro em caso de sucesso
        } else {
          setEmailSuccess(false);
          return response.json().then((errorData) => {
            setErrorMessage(
              errorData?.message || "Erro ao enviar o e-mail. Tente novamente."
            );
          });
        }
      })
      .catch((error) => {
        setEmailSuccess(false);
        setErrorMessage("Erro ao enviar o e-mail. Tente novamente.");
        console.error("Erro ao enviar o e-mail:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-container">
      <header>
        <h2>Entre em contato</h2>
        <p className="intro-text">
          Estamos aqui para responder suas dúvidas ou solicitar um orçamento.
        </p>
      </header>
      <form className="contact-form">
        <div className="field-container">
          <label htmlFor="email">Seu Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="content">Motivo do Contato:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Explique seu pedido ou dúvida"
            required
          />
        </div>
        <div className="field-container">
          <button
            type="button"
            onClick={sendEmail}
            disabled={loading || !email || !content}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
      <div className="status-container">
        {emailSuccess && (
          <div className="success-message">
            E-mail enviado com sucesso! 🎉
          </div>
        )}
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
      </div>
    </section>
  );
}
