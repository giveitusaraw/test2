import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '60+', label: 'Anos de Experiência' },
  { value: '100%', label: 'Fabricado na Europa' },
  { value: '5', label: 'Línguas de Suporte' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="relative flex-1 mx-4 mt-4 rounded-3xl overflow-hidden min-h-[85vh]">
        <img
          src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/mct-070.jpg?fit=fill&w=3000&q=75"
          alt="MCT Fábrica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/70" />

        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-14 min-h-[85vh]">
          <div />
          <div className="max-w-2xl">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Metalúrgica Central da Trofa
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              Especialistas em<br />
              <span className="text-amber-400">Latão</span> há mais<br />
              de 60 anos
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-xl">
              Da fundição ao produto acabado — parceiros de excelência para quem procura qualidade Made in Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#activities"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Explorar Atividades
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-full transition-colors text-sm backdrop-blur-sm"
              >
                Falar Connosco
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-6 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-amber-600 mb-1">{stat.value}</span>
              <span className="text-stone-500 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
