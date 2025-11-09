"use client";

import React, { ReactNode } from 'react';

// Define a interface para as propriedades, tipando explicitamente 'children'
interface CssWaveBackgroundProps {
  children: ReactNode;
}

const CssWaveBackground: React.FC<CssWaveBackgroundProps> = ({ children }) => {
  return (
    <section>
      {/* O conteúdo fica no topo (zIndex: 1) */}
      <div className="content">{children}</div>
      
      {/* O contêiner da onda (wave) e os spans animados */}
      <div className="wave">
        <span />
        <span />
        <span />
      </div>
      
      {/* Estilos JSX */}
      <style jsx global>{`
        /* Importa a fonte Poppins */
        @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
        
        /* Reset básico e fonte */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
        }

        body {
            overflow-x: hidden;
            min-height: 100vh;
        }
      `}</style>
      
      <style jsx>{`
        /* Estilo da Seção Principal */
        section {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden; 
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #000; /* Fundo */
        }
        
        /* Conteúdo no Centro */
        .content {
            position: relative;
            z-index: 1; 
            font-size: 4em;
            letter-spacing: 2px;
            color: #fff;
            text-align: center;
            padding: 20px;
        }
        
        /* Contêiner da Onda */
        .wave {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: #4973ff; /* Cor da área superior da onda */
            box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
            transition: 0.5s;
        }
        
        /* Estilo dos Círculos Animados (a parte de baixo da "onda") */
        .wave span {
            content: "";
            position: absolute;
            width: 325vh; /* Círculos Gigantes */
            height: 325vh;
            top: 0;
            left: 60%;
            /* Translate para que apenas a borda inferior curva seja visível */
            transform: translate(-50%, -75%); 
            background: #000; /* Cor igual ao fundo da SECTION */
        }

        .wave span:nth-child(1) {
            border-radius: 45%;
            background: rgba(20, 20, 20, 1);
            animation: animate 10s linear infinite; /* Rotação mais rápida */
        }

        .wave span:nth-child(2) {
            border-radius: 40%;
            background: rgba(20, 20, 20, 0.5);
            animation: animate 10s linear infinite;
        }

        .wave span:nth-child(3) {
            border-radius: 42.5%;
            background: rgba(20, 20, 20, 0.5);
            animation: animate 15s linear infinite; /* Rotação mais lenta */
        }
        
        /* Keyframes de Rotação */
        @keyframes animate {
            0% {
                transform: translate(-50%, -75%) rotate(0deg);
            }
            100% {
                transform: translate(-50%, -75%) rotate(360deg);
            }
        }
      `}</style>
    </section>
  );
};

export default CssWaveBackground;