
import Image from 'next/image';
import Link from 'next/link';
// Para os ícones, instale: npm install lucide-react
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-santuário-da-Fé.png" alt="Santuário da Fé Logo" width={60} height={60} />
              <span className="font-serif text-lg font-semibold">Santuário da Fé</span>
            </Link>
            <p className="font-sans text-gray-400">
              Um lugar de propósito e transformação, conectando pessoas a Deus.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-sans text-gray-400">
              <li><Link href="#igreja" className="hover:text-white transition-colors">A Igreja</Link></li>
              <li><Link href="#eventos" className="hover:text-white transition-colors">Eventos</Link></li>
              <li><Link href="#horarios" className="hover:text-white transition-colors">Horários</Link></li>
              <li><Link href="#oracao" className="hover:text-white transition-colors">Oração</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contato</h3>
            <address className="font-sans text-gray-400 not-italic space-y-2">
              <p>R. 240, 326 - Setor Coimbra</p>
              <p>Goiânia - GO, CEP: 74533-260</p>
            </address>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {/* Exemplo de como usar os ícones após instalar lucide-react */}
              {/* <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a> */}
              {/* <a href="#" className="text-gray-400 hover:text-white"><Youtube size={24} /></a> */}
              {/* <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a> */}
              <a href="https://www.instagram.com/igrejasdf/" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="https://www.youtube.com/user/santuariodafego" className="text-gray-400 hover:text-white">YouTube</a>
              <a href="https://www.facebook.com/IgrejaSantuarioDaFe/?locale=pt_BR" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Santuário da Fé. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
