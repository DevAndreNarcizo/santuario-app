
import React from 'react';

const DailyMessage = () => {
  return (
    <section id="mensagem" className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-8">
          Mensagem do Dia
        </h2>
        <div className="w-full max-w-2xl bg-background-textured p-8 rounded-lg shadow-md text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-primary-text italic">
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
          </blockquote>
          <p className="font-sans font-semibold text-secondary-text mt-4">João 3:16</p>
        </div>
      </div>
    </section>
  );
};

export default DailyMessage;
