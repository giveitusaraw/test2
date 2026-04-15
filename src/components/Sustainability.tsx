import { Droplets, Wind, Recycle, TrendingDown, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Droplets,
    title: 'Gestão da Água',
    desc: 'Utilização inteligente dos recursos hídricos, com sistemas de reciclagem e monitorização contínua do consumo.',
    bg: 'bg-sky-700 text-white',
    iconBg: 'bg-sky-600',
  },
  {
    icon: Wind,
    title: 'Redução de Emissões',
    desc: 'Programas ativos de redução das emissões de gases com efeito de estufa nos processos produtivos.',
    bg: 'bg-emerald-100 text-stone-800',
    iconBg: 'bg-emerald-200',
  },
  {
    icon: TrendingDown,
    title: 'Menos Resíduos',
    desc: 'Plano de minimização de resíduos industriais com separação, reutilização e valorização de materiais.',
    bg: 'bg-amber-500 text-stone-900',
    iconBg: 'bg-amber-400',
  },
  {
    icon: Recycle,
    title: 'Economia Circular',
    desc: 'Adoção de princípios de economia circular em toda a cadeia de valor — da matéria-prima ao produto final.',
    bg: 'bg-stone-800 text-white',
    iconBg: 'bg-stone-700',
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">Sustentabilidade</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight max-w-xl">
              Comprometidos com a Agenda 2030 das Nações Unidas
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm text-sm leading-relaxed">
            Acreditamos que é possível equilibrar crescimento económico, proteção ambiental e combate às desigualdades sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {pillars.map((pillar, i) => (
            <div key={i} className={`rounded-2xl p-7 flex flex-col gap-4 ${pillar.bg}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pillar.iconBg}`}>
                <pillar.icon size={18} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{pillar.desc}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity mt-auto">
                Saber Mais <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/fields-gf58e478fd_1920.jpg?fit=fill&w=3000&q=75"
            alt="Sustentabilidade"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/50" />
          <div className="absolute bottom-8 right-8 bg-amber-400 rounded-2xl p-7 max-w-xs shadow-2xl">
            <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight size={16} className="text-white rotate-[-45deg]" />
            </div>
            <p className="text-stone-900 font-bold text-xl leading-snug mb-4">
              Fazer a diferença: construir um futuro mais sustentável
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-stone-900 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-stone-700 transition-colors"
            >
              Trabalhar Connosco <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
