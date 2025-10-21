
import React from 'react';

const ServiceCard = ({ day, event, time }: { day: string; event: string; time: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300">
    <h3 className="font-serif text-2xl font-bold text-primary-text">{day}</h3>
    <p className="font-sans text-lg text-secondary-text mt-2">{event}</p>
    <p className="font-sans text-2xl font-light text-primary-text mt-4">{time}</p>
  </div>
);

const ServiceTimes = () => {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-12">
          Participe de Nossos Cultos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard day="Domingo" event="Culto de Celebração" time="9h & 19h" />
          <ServiceCard day="Quarta-feira" event="Culto de milagres" time="07h" />
          <ServiceCard day="Sexta-feira" event="Culto de Libertação" time="19:30h" />
        </div>
        <div className="text-center mt-12">
          <p className="font-sans text-lg text-secondary-text">
            R. 240, 326 - Setor Coimbra, Goiânia - GO, CEP: 74533-260
          </p>
          <a
            href="https://maps.app.goo.gl/Z2QyxJhsd2fx9cwm7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 rounded-md text-black bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:opacity-90 transition-opacity "
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
