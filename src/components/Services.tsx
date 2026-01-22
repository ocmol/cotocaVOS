import { Hammer, Heart, GraduationCap, Shield, Leaf, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Obras Públicas',
    description: 'Infraestructura y desarrollo urbano para mejorar la calidad de vida de nuestros ciudadanos.',
    image: 'https://images.pexels.com/photos/1106502/pexels-photo-1106502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    title: 'Salud',
    description: 'Centros de salud y programas de atención médica para toda la comunidad.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    description: 'Apoyo a instituciones educativas y programas de capacitación.',
    image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Vigilancia y protección para mantener a nuestra comunidad segura.',
    image: 'https://images.pexels.com/photos/8837732/pexels-photo-8837732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Leaf,
    title: 'Medio Ambiente',
    description: 'Proyectos de conservación y gestión ambiental sostenible.',
    image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: TrendingUp,
    title: 'Desarrollo Económico',
    description: 'Impulso a emprendimientos y desarrollo productivo local.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trabajamos cada día para brindar servicios de calidad a todos los ciudadanos de Cotoca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ver más
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
