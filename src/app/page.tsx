"use client";

import Head from 'next/head';
import CssWaveBackground from '../components/CssWaveBackground';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CssWaveBackground>
        <p>Bem vindo(a)</p>
        <p style={{ fontSize: '0.3em', marginTop: '5px' }}>
            ao meu portfólio! 🤩
        </p>
      </CssWaveBackground>
    </>
  );
}
