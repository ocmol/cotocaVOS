export default function Candidate() {
  return (
    <section id="candidato" className="py-16 bg-gradient-to-r from-red-50 to-red-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/finales-54.png"
              alt="José Luis Moreno"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4 font-semibold">
              Partido VOS
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              José Luis Moreno
            </h2>
            <p className="text-xl text-red-700 font-semibold mb-6">
              Candidato por el Municipio de Cotoca
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Con amplia experiencia en gestión municipal y compromiso con el desarrollo de nuestra comunidad, José Luis Moreno se presenta como candidato del Partido VOS para liderar el futuro de Cotoca.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-red-600">15+</p>
                <p className="text-gray-700 text-sm">Años de experiencia</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-3xl font-bold text-red-600">100%</p>
                <p className="text-gray-700 text-sm">Compromiso</p>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg text-lg">
              Apoya la Candidatura
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
