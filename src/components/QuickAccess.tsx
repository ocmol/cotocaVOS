import { FileText, Users, Building2, Calendar, MapPinned, Briefcase } from 'lucide-react';

const quickLinks = [
  {
    icon: FileText,
    title: 'Propuestas',
    description: 'Nuestro plan de trabajo',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Equipo',
    description: 'Conoce al candidato',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Building2,
    title: 'Cotoca',
    description: 'Nuestro municipio',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Calendar,
    title: 'Eventos',
    description: 'Actividades y campañas',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: MapPinned,
    title: 'Galería',
    description: 'Fotos de Cotoca',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Briefcase,
    title: 'Denuncias',
    description: 'Reporta irregularidades',
    color: 'from-slate-500 to-slate-600',
  },
];

export default function QuickAccess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Acceso Rápido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
