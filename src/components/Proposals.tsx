import { Lightbulb, Users, Leaf, Briefcase, Building2, Heart } from 'lucide-react';

const proposals = [
  {
    icon: Building2,
    title: 'Infraestructura Moderna',
    description: 'Mejorar calles, servicios básicos y espacios públicos para todos',
  },
  {
    icon: Heart,
    title: 'Salud y Bienestar',
    description: 'Fortalecer centros de salud y acceso a medicamentos',
  },
  {
    icon: Lightbulb,
    title: 'Educación de Calidad',
    description: 'Invertir en escuelas y capacitación para el futuro',
  },
  {
    icon: Briefcase,
    title: 'Empleo Local',
    description: 'Impulsar emprendimientos y crear oportunidades económicas',
  },
  {
    icon: Leaf,
    title: 'Ambiente Sostenible',
    description: 'Proteger nuestro entorno para las próximas generaciones',
  },
  {
    icon: Users,
    title: 'Comunidad Unida',
    description: 'Fortalecer la participación ciudadana en decisiones municipales',
  },
];

export default function Proposals() {
  return (
    <section id="propuestas" className="py-16 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Propuestas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plan de trabajo para mejorar la calidad de vida en Cotoca
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition group border-t-4 border-red-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{proposal.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{proposal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
