import { ArrowUpRight } from 'lucide-react';

const activities = [
  {
    tag: 'ATIVIDADE 1',
    title: 'Produto Acabado',
    subtitle: 'Private Label',
    description:
      'Na MCT, somos o parceiro ideal para todas as empresas comprometidas com uma estratégia de Private Label para torneiras, que necessitam de criar e produzir as linhas e gamas da sua oferta com soluções turnkey.',
    image: 'https://cdn.bndlyr.com/s9a0uwrhnbc84fek/_assets/01-new.png',
    details: [
      { label: 'Segmento', value: 'Torneiras & Acessórios' },
      { label: 'Serviço', value: 'Design & Produção' },
      { label: 'Modelo', value: 'Private Label / OEM' },
    ],
  },
  {
    tag: 'ATIVIDADE 2',
    title: 'Artesanato',
    subtitle: 'Craftsmanship',
    description:
      'Especialistas em latão, fundição e arte da liga metálica — o artesanato é uma das atividades de que os nossos fundadores mais se orgulham. A nossa perícia única transforma o latão em obras de precisão.',
    image: 'https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/craftsmanship.png?fit=fill&w=1200&q=85',
    details: [
      { label: 'Material', value: 'Latão & Ligas' },
      { label: 'Técnica', value: 'Fundição Artesanal' },
      { label: 'Origem', value: 'Vila Nova de Famalicão' },
    ],
  },
  {
    tag: 'ATIVIDADE 3',
    title: 'OEM',
    subtitle: 'Original Equipment Manufacturing',
    description:
      'Oferecemos soluções de fabrico de equipamento original completo — da investigação e desenvolvimento à entrega final, com tecnologia de ponta e equipamento CNC de última geração.',
    image: 'https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/mct-047.jpg?fit=fill&w=1200&q=85',
    details: [
      { label: 'Capacidade', value: 'Alta Volume' },
      { label: 'Tecnologia', value: 'CNC & Transfer' },
      { label: 'Cobertura', value: 'Mercado Global' },
    ],
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">Áreas de Atividade</p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 max-w-2xl leading-tight">
            Três pilares de excelência industrial
          </h2>
        </div>

        <div className="space-y-8">
          {activities.map((item, i) => (
            <div
              key={i}
              className="bg-stone-50 rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center group hover:bg-stone-100 transition-colors"
            >
              <div className="order-2 md:order-1">
                <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">{item.tag}</p>
                <h3 className="text-3xl font-bold text-stone-900 mb-1">{item.title}</h3>
                <p className="text-stone-400 text-sm mb-4">{item.subtitle}</p>
                <p className="text-stone-600 leading-relaxed mb-6">{item.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {item.details.map((d) => (
                    <div key={d.label}>
                      <p className="text-stone-400 text-xs mb-1">{d.label}</p>
                      <p className="text-stone-800 text-sm font-semibold">{d.value}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors"
                >
                  Saber Mais <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
