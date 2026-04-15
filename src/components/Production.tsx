import { FlaskConical, Hammer, Settings, Sparkles, Package, Truck, ArrowUpRight } from 'lucide-react';

const steps = [
  {
    icon: FlaskConical,
    title: 'I&D',
    description: 'Investigação e desenvolvimento para soluções inovadoras em latão e ligas metálicas.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Hammer,
    title: 'Fundição & Estampagem',
    description: 'Processos de fundição em areia e estampagem de alta precisão para peças complexas.',
    color: 'bg-stone-800 text-amber-400',
  },
  {
    icon: Settings,
    title: 'Maquinação',
    description: 'Parque de maquinaria CNC, tornos e sistemas de transferência de última geração.',
    color: 'bg-amber-500 text-stone-900',
  },
  {
    icon: Sparkles,
    title: 'Acabamentos',
    description: 'Polido, niquelado, cromado, PVD e soft paint — superfícies perfeitas para cada projeto.',
    color: 'bg-stone-100 text-stone-700',
  },
  {
    icon: Package,
    title: 'Montagem & Packing',
    description: 'Linhas de montagem e embalagem adaptadas a cada cliente e especificação.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Truck,
    title: 'Dropshipping',
    description: 'Serviço de dropshipping direto ao cliente final — logística simplificada.',
    color: 'bg-stone-800 text-amber-400',
  },
];

export default function Production() {
  return (
    <section id="production" className="py-24 px-4 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Processo Produtivo</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
              Do conceito ao produto acabado
            </h2>
          </div>
          <p className="text-stone-400 max-w-sm text-sm leading-relaxed">
            Investimento contínuo em equipamento de ponta. Capacidade para responder a requisitos técnicos exigentes e a volumes de produção elevados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-4 bg-stone-800 hover:bg-stone-700 transition-colors group"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.color}`}>
                <step.icon size={18} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden relative aspect-[21/7] min-h-[200px]">
          <img
            src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/mct-047.jpg?fit=fill&w=3000&q=75"
            alt="Fábrica MCT"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent flex items-center p-10">
            <div>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Tecnologia</p>
              <h3 className="text-white text-3xl font-bold max-w-sm mb-4">
                Equipamento CNC de última geração
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                Visitar Instalações <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
