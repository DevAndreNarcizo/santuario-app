
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative flex items-center justify-center h-screen bg-cover bg-center text-white">
      {/* Background Image - Substitua com sua imagem de alta qualidade */}
      <div
        className="absolute inset-0 bg-[url('/background-image.jpeg')] bg-cover bg-center"
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center p-4">
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4">
          Santuário da Fé: Um lugar de propósito e transformação.
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Conectando pessoas a Deus, umas às outras e ao seu propósito.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#horarios" className="w-full sm:w-auto px-8 py-3 rounded-md text-white bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:opacity-90 transition-opacity">
            Nossos Horários
          </a>
          <a href="#igreja" className="w-full sm:w-auto px-8 py-3 rounded-md text-white border border-white hover:bg-white/10 transition-colors">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
