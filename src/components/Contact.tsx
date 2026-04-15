import { MapPin, Phone, Mail, Printer } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">Contactos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Vamos trabalhar juntos
            </h2>
            <p className="text-stone-500 leading-relaxed mb-10">
              Estamos disponíveis para discutir o seu projeto, responder às suas dúvidas ou agendar uma visita às nossas instalações em Vila Nova de Famalicão.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-0.5">Morada</p>
                  <p className="text-stone-500 text-sm">Rua da Fervença, PAV. 9 e 10<br />4760-725 V.N. de Famalicão, Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-0.5">Telefone</p>
                  <a href="tel:+351252428888" className="text-stone-500 text-sm hover:text-amber-600 transition-colors">
                    +351 252 428 888
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Printer size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-0.5">Fax</p>
                  <p className="text-stone-500 text-sm">+351 252 428 890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 mb-0.5">Email</p>
                  <a href="mailto:mct@mct.com.pt" className="text-stone-500 text-sm hover:text-amber-600 transition-colors">
                    mct@mct.com.pt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-3xl p-8">
            <h3 className="font-bold text-stone-900 text-xl mb-6">Envie-nos uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="email@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm">
                  <option>Produto Acabado / Private Label</option>
                  <option>OEM</option>
                  <option>Artesanato / Craftsmanship</option>
                  <option>Visita às Instalações</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm resize-none"
                  placeholder="Descreva o seu projeto ou questão..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
