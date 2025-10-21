
'use client'; // Necessário para usar hooks como o useState

import React, { useState } from 'react';

// Mock Data - Substitua por dados da sua API
const prayerRequests = [
  { id: 1, name: 'Anônimo', request: 'Peço pela saúde da minha família.' },
  { id: 2, name: 'Maria S.', request: 'Agradeço pela recuperação do meu pai e peço forças para continuar.' },
  { id: 3, name: 'João P.', request: 'Por uma oportunidade de emprego.' },
];

const PrayerWall = () => {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar a lógica de fetch para enviar o pedido para a API
    console.log({ name, request });
    alert('Seu pedido de oração foi enviado com sucesso!');
    setName('');
    setRequest('');
  };

  return (
    <section id="oracao" className="py-16 md:py-24 bg-black text-black">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary-text mb-12 text-white">
          Mural de Orações
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Submissão */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4 text-white">Deixe seu Pedido</h3>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block font-sans text-secondary-text mb-2">Nome (Opcional)</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-gradient-start/50 focus:border-transparent transition"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="request" className="block font-sans text-secondary-text mb-2">Seu Pedido de Oração</label>
                <textarea
                  id="request"
                  rows={5}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-gradient-start/50 focus:border-transparent transition"
                ></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 rounded-md text-black bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:opacity-90 transition-opacity">
                Enviar Pedido
              </button>
            </form>
          </div>

          {/* Exibição de Pedidos */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-primary-text mb-4 text-white">Pedidos Recentes</h3>
            <div className="space-y-4">
              {prayerRequests.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-sans text-secondary-text">{item.request}</p>
                  <p className="font-sans text-sm text-right text-gray-400 mt-2">- {item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;
