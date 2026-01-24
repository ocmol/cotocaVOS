import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import { submitComplaint } from '../lib/supabase';

export default function Complaints() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    complaint_type: 'corruption',
    title: '',
    description: '',
    location: '',
    is_anonymous: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitComplaint(formData);
      setSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        complaint_type: 'corruption',
        title: '',
        description: '',
        location: '',
        is_anonymous: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Error al enviar la denuncia. Por favor intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="denuncias" className="py-16 bg-gradient-to-br from-red-900 to-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertCircle size={40} className="text-red-300" />
              <h2 className="text-4xl font-bold">Línea de Denuncias</h2>
            </div>
            <p className="text-lg text-red-100">
              Reporta irregularidades, corrupción o abuso de autoridad de forma segura
            </p>
          </div>

          {submitted && (
            <div className="mb-8 bg-green-500 rounded-lg p-6 flex items-start gap-4 animate-in">
              <CheckCircle className="flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-lg mb-1">Denuncia Enviada</h3>
                <p className="text-green-100">Tu reporte ha sido registrado. Te contactaremos pronto.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 bg-red-600 rounded-lg p-6 flex items-start gap-4">
              <X className="flex-shrink-0 mt-1" size={24} />
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-xl p-8 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={formData.is_anonymous}
                  required={!formData.is_anonymous}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 disabled:bg-gray-100"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formData.is_anonymous}
                  required={!formData.is_anonymous}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 disabled:bg-gray-100"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono (Opcional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  placeholder="+591 3 XXXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo de Denuncia</label>
                <select
                  name="complaint_type"
                  value={formData.complaint_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="corruption">Corrupción</option>
                  <option value="abuse">Abuso de Autoridad</option>
                  <option value="negligence">Negligencia</option>
                  <option value="fraud">Fraude</option>
                  <option value="other">Otra</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Título de la Denuncia</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Resumen breve del caso"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Descripción Detallada</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Describe los hechos detalladamente..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Ubicación (Opcional)</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Lugar donde ocurrió el hecho"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="anonymous"
                name="is_anonymous"
                checked={formData.is_anonymous}
                onChange={handleChange}
                className="w-5 h-5 rounded"
              />
              <label htmlFor="anonymous" className="text-sm text-gray-700">
                Quiero reportar de forma anónima
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 rounded-lg transition"
            >
              {loading ? 'Enviando...' : 'Enviar Denuncia'}
            </button>

            <p className="text-xs text-gray-600 text-center">
              Tu información será tratada de manera confidencial de acuerdo con la ley de protección de datos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
