
import Image from 'next/image';
import React from 'react';

// Mock Data - Substitua pela sua chamada de API no futuro
const eventsData = [
  {
    id: 1,
    image: '/event-1.jpeg',
    title: 'Teatro Crianças ',
    description: 'Uma apresentação de dança com música e teatro.',
  },
  {
    id: 2,
    image: '/event-2.jpeg',
    title: 'Teatro Crianças ',
    description: 'Uma apresentação de dança com música e teatro para a adoração e gratidão a Deus.',
  },
  {
    id: 3,
    image: '/event-3.jpeg',
    title: 'Batismo',
    description: 'O batismo é imerso nas águas, simbolizando a morte do “velho eu” (vida de pecado), e ao sair da água, representa a ressurreição para uma nova vida com Deus — conforme ensinado por Jesus em Mateus 28:19 e exemplificado no batismo de Cristo no rio Jordão.',
  },
];

const EventCard = ({ image, title, description }: typeof eventsData[0]) => (
  <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="relative w-full h-80">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-serif text-xl font-semibold text-primary-text mt-2">{title}</h3>
      <p className="font-sans text-secondary-text mt-2 flex-grow">{description}</p>
    </div>
  </div>
);

const Events = () => {
  return (
    <section id="eventos" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-12">
          Próximos Eventos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
