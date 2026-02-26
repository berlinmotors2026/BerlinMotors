"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "d1d01950-df48-4a98-9f35-055bf2cbeebc");
    formData.append("from_name", "Berlin Prestige Web");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            ¿Tienes alguna pregunta sobre un vehículo o te interesa nuestro
            programa de consignación? Escríbenos — nos encantaría saber de vos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-dark-800 border border-brand/30 rounded-lg p-8 text-center">
                <div className="text-brand text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-400">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-brand hover:text-brand-light text-sm transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="subject" value="Nuevo mensaje desde Berlin Prestige Web" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (opcional)"
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                  <select
                    name="topic"
                    defaultValue=""
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  >
                    <option value="" disabled className="text-gray-500">
                      Asunto
                    </option>
                    <option>Consulta General</option>
                    <option>Pregunta sobre Vehículo</option>
                    <option>Interés en Consignación</option>
                    <option>Otro</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Tu mensaje..."
                  rows={5}
                  required
                  className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors resize-none"
                />
                {error && (
                  <p className="text-red-400 text-sm">
                    Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brand hover:bg-brand-light text-dark-900 font-semibold py-3.5 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Teléfono</h3>
              <a
                href="tel:+5491126160829"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                +54 9 11 2616-0829
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Correo</h3>
              <a
                href="mailto:Berlinprestige2026@gmail.com"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                Berlinprestige2026@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-400">
                Villa del Parque<br />
                CABA, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
