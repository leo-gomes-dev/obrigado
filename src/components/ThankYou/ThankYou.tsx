import React from "react";
import "./ThankYou.css";

const ThankYou: React.FC = () => {
  const fullBarStatus: React.CSSProperties = {
    width: "100%",
  };

  return (
    <section className="about">
      <div className="about-title">
        <h1>Obrigado pelo Apoio!</h1>
      </div>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            {`> STATUS: Apoio Confirmado...`} <br />
            {`> USUÁRIO: Novo Assinante Detectado.`} <br />
            {`> MENSAGEM: Seu apoio mensal está oficialmente ativo. Obrigado por fortalecer a comunidade!`}
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>Nível de Colaboração: APOIO A PROJETOS</p>
              <div className="bar-container">
                <hr style={fullBarStatus} />
              </div>
            </div>
            <div className="about-skill">
              <p>Energia do Sistema: GRATIDÃO</p>
              <div className="bar-container">
                <hr style={fullBarStatus} />
              </div>
            </div>
          </div>

          {/* Botão de Ação Estilizado */}
          <div className="btn-container">
            <a href="https://leogomesdev.com/" className="rpg-btn secondary">
              <span className="btn-text">Voltar ao Início</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
