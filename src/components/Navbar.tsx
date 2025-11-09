// components/Navbar.tsx

"use client";

import React from 'react';

const navOptions = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Contato', href: '/contact' },
];

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navOptions.map((option) => (
          // Usar <Link> do 'next/link' seria ideal aqui em um projeto real
          <li key={option.name}>
            <a href={option.href}>{option.name}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        nav {
          position: relative; /* Garante que ocupe espaço no fluxo do documento */
          height: 60px;     /* Altura fixa para o cálculo da onda */
          width: 100%;
          padding: 0 40px;
          display: flex;
          align-items: center;
          background: #222; 
          z-index: 100; /* Alto z-index para garantir que fique acima de tudo */
        }

        ul {
          list-style: none;
          display: flex;
          justify-content: flex-end; 
          width: 100%; /* Permite que o justify-content empurre para a direita */
          margin: 0;
          padding: 0;
        }

        li {
          margin-left: 30px;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1em;
          transition: 0.3s;
        }

        a:hover {
          color: #4973ff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;