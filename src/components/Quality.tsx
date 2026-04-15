import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    q: 'Que certificações de qualidade possui a MCT?',
    a: 'A MCT possui certificação ISO 9001 e outras certificações de qualidade europeias que garantem o cumprimento dos mais elevados padrões de produção e controlo de qualidade.',
  },
  {
    q: 'É possível produzir peças com design exclusivo?',
    a: 'Sim. Oferecemos serviços completos de design e desenvolvimento de produto para private label, desde a fase de concept até ao produto acabado, com total confidencialidade.',
  },
  {
    q: 'Que acabamentos superficiais estão disponíveis?',
    a: 'Oferecemos polido, niquelado, cromado, PVD (Physical Vapour Deposition) e soft paint — uma gama completa para satisfazer qualquer requisito estético ou funcional.',
  },
  {
    q: 'Qual é a capacidade mínima de encomenda?',
    a: 'A capacidade mínima varia conforme o produto e o processo de fabrico. Contacte-nos para discutir as suas necessidades específicas e obter uma proposta personalizada.',
  },
  {
    q: 'A MCT faz exportação para fora de Portugal?',
    a: 'Sim. Exportamos para toda a Europa e mercados internacionais. A nossa equipa fala Português, Inglês, Espanhol, Francês e Alemão para melhor apoio aos nossos clientes.',
  },
];

export default function Quality() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="quality" className="py-24 px-4 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">Qualidade & FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-stone-900 pr-4">{faq.q}</span>
                <div className="shrink-0 w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center">
                  {open === i ? <X size={14} className="text-stone-500" /> : <Plus size={14} className="text-stone-500" />}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-stone-500 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          Tem outras questões?{' '}
          <a href="#contact" className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2">
            Entre em contacto connosco
          </a>
        </p>
      </div>
    </section>
  );
}
