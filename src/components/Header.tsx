import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-red-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+59133000000" className="flex items-center gap-2 hover:text-red-200 transition">
                <Phone size={14} />
                <span>(591-3) 300-0000</span>
              </a>
              <a href="mailto:info@cotoca.gob.bo" className="flex items-center gap-2 hover:text-red-200 transition">
                <Mail size={14} />
                <span>info@cotoca.gob.bo</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Cotoca, Santa Cruz - Bolivia</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                <span>GM</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-red-700">Gobierno Municipal de Cotoca</h1>
                <p className="text-sm text-gray-600">Santa Cruz - Bolivia</p>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-red-700 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#inicio" className="text-gray-700 hover:text-red-700 font-medium transition">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-red-700 font-medium transition">Servicios</a>
              <a href="#atracciones" className="text-gray-700 hover:text-red-700 font-medium transition">Atracciones</a>
              <a href="#noticias" className="text-gray-700 hover:text-red-700 font-medium transition">Noticias</a>
              <a href="#denuncias" className="text-gray-700 hover:text-red-700 font-medium transition">Denuncias</a>
              <a href="#contacto" className="text-gray-700 hover:text-red-700 font-medium transition">Contacto</a>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              <a href="#inicio" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Inicio</a>
              <a href="#servicios" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Servicios</a>
              <a href="#atracciones" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Atracciones</a>
              <a href="#noticias" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Noticias</a>
              <a href="#denuncias" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Denuncias</a>
              <a href="#contacto" className="block py-2 text-gray-700 hover:text-red-700 font-medium transition">Contacto</a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
