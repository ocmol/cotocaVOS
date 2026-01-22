import { Calendar, Clock, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Nueva infraestructura vial en construcción',
    excerpt: 'El Gobierno Municipal inicia obras de pavimentación en las principales avenidas del municipio.',
    date: '20 Enero 2026',
    time: '10:30 AM',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Obras Públicas',
  },
  {
    title: 'Feria de emprendedores locales',
    excerpt: 'Se realizará la primera feria municipal de emprendimientos con más de 100 expositores.',
    date: '18 Enero 2026',
    time: '2:00 PM',
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Desarrollo',
  },
  {
    title: 'Campaña de vacunación infantil',
    excerpt: 'Centro de salud municipal ofrece vacunación gratuita para niños menores de 5 años.',
    date: '15 Enero 2026',
    time: '8:00 AM',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Salud',
  },
  {
    title: 'Festival Cultural de Cotoca 2026',
    excerpt: 'Gran celebración anual con danzas tradicionales, música y gastronomía local.',
    date: '12 Enero 2026',
    time: '6:00 PM',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cultura',
  },
];

export default function News() {
  return (
    <section id="noticias" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Noticias y Eventos</h2>
          <p className="text-xl text-gray-600">
            Mantente informado sobre las últimas novedades del municipio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{item.time}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Leer más
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
            Ver todas las noticias
          </button>
        </div>
      </div>
    </section>
  );
}
