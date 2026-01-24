import { Heart } from 'lucide-react';

const images = [
  {
    title: 'Cotoca Centro',
    image: 'https://images.pexels.com/photos/1936936/pexels-photo-1936936.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Agricultura Local',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Comunidad',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Naturaleza',
    image: 'https://images.pexels.com/photos/1300375/pexels-photo-1300375.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Desarrollo Local',
    image: 'https://images.pexels.com/photos/2393220/pexels-photo-2393220.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Futuro Brillante',
    image: 'https://images.pexels.com/photos/2147265/pexels-photo-2147265.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cotoca, Nuestra Tierra</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Imágenes que reflejan la belleza y potencial de nuestro municipio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="flex items-center gap-2">
                  <Heart className="text-red-500 fill-red-500" size={20} />
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
