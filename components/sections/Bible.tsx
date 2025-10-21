
import React from 'react';

const Bible = () => {
  return (
    <section id="biblia" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-12 text-black">
          Estude a Palavra
        </h2>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mb-8">
            {/* Iframe do YouVersion - pode ser ajustado para outras fontes se necessário */}
            <iframe 
              src="https://www.bible.com/pt/bible/129/GEN.1.NVI" 
              className="w-full h-[600px] border-0"
              title="Leitor da Bíblia Online"
            ></iframe>
          </div>
          <a 
            href="https://www.bible.com/pt/reading-plans" // Link para os planos de leitura
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md text-black bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:opacity-90 transition-opacity"
          >
            Ver Planos de Leitura
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bible;
