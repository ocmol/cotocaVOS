import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <span>GM</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">GM Cotoca</h3>
                <p className="text-sm text-gray-400">Santa Cruz</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Gobierno Municipal de Cotoca, comprometido con el desarrollo y bienestar de nuestra comunidad.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#gobierno" className="hover:text-green-500 transition text-sm">
                  Gobierno Municipal
                </a>
              </li>
              <li>
                <a href="#tramites" className="hover:text-green-500 transition text-sm">
                  Trámites y Servicios
                </a>
              </li>
              <li>
                <a href="#noticias" className="hover:text-green-500 transition text-sm">
                  Noticias y Eventos
                </a>
              </li>
              <li>
                <a href="#transparencia" className="hover:text-green-500 transition text-sm">
                  Transparencia
                </a>
              </li>
              <li>
                <a href="#turismo" className="hover:text-green-500 transition text-sm">
                  Turismo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Plaza Principal, Cotoca<br />
                  Santa Cruz - Bolivia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 flex-shrink-0" />
                <a href="tel:+59133000000" className="hover:text-green-500 transition text-sm">
                  (591-3) 300-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-500 flex-shrink-0" />
                <a href="mailto:info@cotoca.gob.bo" className="hover:text-green-500 transition text-sm">
                  info@cotoca.gob.bo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-2">Horario de Atención:</p>
              <p>Lunes a Viernes</p>
              <p>8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Gobierno Municipal de Cotoca. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-green-500 transition">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-green-500 transition">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-green-500 transition">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
