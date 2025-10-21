
import Image from 'next/image';
import React from 'react';

const ChurchPurpose = () => {
  return (
    <section id="igreja" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-12">
          Nossa Igreja, Nosso Propósito
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full h-100 md:h-180 relative rounded-lg overflow-hidden shadow-lg">
            {/* Substitua pela imagem do pastor ou da liderança */}
            <Image
              src="/pastor-image.png"
              alt="Liderança da Igreja Santuário da Fé"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="font-sans text-secondary-text">
            <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4">Missão</h3>
            <p className="mb-6">
              Nossa missão é criar um ambiente acolhedor onde as pessoas possam se conectar com Deus, crescer em sua fé e descobrir o propósito que Ele tem para suas vidas. Buscamos ser uma igreja relevante, que ensina a Bíblia de forma prática e impacta nossa comunidade com o amor de Cristo.
            </p>
            <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4">Visão & Valores</h3>
            <p className="mb-4">
              Nossa visão é ser um farol de esperança e transformação. Nossos valores são fundamentados na adoração, no discipulado, na comunhão, no serviço e no evangelismo. Cremos em uma fé que se manifesta em amor e ação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchPurpose;
