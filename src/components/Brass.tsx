const applications = [
  { title: 'Torneiras', desc: 'Torneiras para cozinha, casa de banho e uso industrial com design e qualidade europeia.' },
  { title: 'Válvulas', desc: 'Válvulas de precisão para sistemas de fluidos industriais e domésticos.' },
  { title: 'Acessórios Sanitários', desc: 'Gamas completas de acessórios para casa de banho em latão de alta qualidade.' },
  { title: 'Componentes Técnicos', desc: 'Peças técnicas de precisão para os mais variados setores industriais.' },
];

export default function Brass() {
  return (
    <section id="brass" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">O Material</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Latão — uma liga com história e futuro
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">
              O latão é uma das ligas metálicas mais versáteis e duradouras da história. A sua composição de cobre e zinco confere-lhe propriedades únicas: resistência à corrosão, maquinabilidade excecional, e acabamento estético que atravessa séculos.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Na MCT, trabalhamos o latão desde a sua forma mais bruta até ao produto acabado — dominando cada fase do processo com o rigor que a nossa experiência de mais de 60 anos nos conferiu.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Resistência à Corrosão', val: '++' },
                { label: 'Maquinabilidade', val: '++' },
                { label: 'Durabilidade', val: '++' },
                { label: 'Reciclabilidade', val: '100%' },
              ].map((prop) => (
                <div key={prop.label} className="bg-stone-50 rounded-xl p-4">
                  <span className="text-2xl font-bold text-amber-600">{prop.val}</span>
                  <p className="text-stone-600 text-sm mt-1">{prop.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/rb-image.png?fit=fill&w=1200&q=85"
                alt="Produtos em Latão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://cdn.bndlyr.com/s9a0uwrhnbc84fek/_assets/02-new.png"
                  alt="Torneira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://cdn.bndlyr.com/s9a0uwrhnbc84fek/_assets/03-new.png"
                  alt="Torneira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-8">Aplicações</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <div key={i} className="border border-stone-200 rounded-2xl p-6 hover:border-amber-300 hover:bg-amber-50/50 transition-colors">
                <h3 className="font-bold text-stone-900 mb-2">{app.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
