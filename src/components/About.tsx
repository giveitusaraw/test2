export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/mct-070.jpg?fit=fill&w=1200&q=85"
                alt="MCT Fundadores"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-stone-900 text-4xl font-bold">1960</p>
              <p className="text-stone-900/70 text-sm font-medium mt-1">Ano de Fundação</p>
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">Sobre a MCT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Uma história de orgulho artesanal
            </h2>

            <div className="space-y-4 text-stone-500 leading-relaxed mb-10">
              <p>
                A MCT — Metalúrgica Central da Trofa — nasceu da paixão pelo latão e pela fundição artesanal. Ao longo de mais de 60 anos, crescemos de uma pequena fundição familiar para uma empresa industrial de referência europeia.
              </p>
              <p>
                Localizados em Vila Nova de Famalicão, Portugal, combinamos o know-how artesanal dos nossos fundadores com a mais avançada tecnologia de produção — para entregar produtos que unem tradição e inovação.
              </p>
              <p>
                O nosso compromisso é simples: ser o parceiro de confiança de marcas que exigem qualidade, flexibilidade e serviço de excelência.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Filosofia', text: 'Excelência em cada peça, do design à entrega.' },
                { title: 'Missão', text: 'Ser o parceiro preferencial de Private Label na Europa.' },
                { title: 'Visão', text: 'Liderar a inovação na metalurgia do latão.' },
                { title: 'Valores', text: 'Qualidade, Sustentabilidade e Transparência.' },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="font-bold text-stone-900 mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <img
                src="https://cdn.bndlyr.com/s9a0uwrhnbc84fek/_assets/tr-testmark_9108628027_en_cmyk_without-qr-code.png"
                alt="Certificação"
                className="h-14 object-contain"
              />
              <div className="flex gap-4">
                {['asset-1', 'asset-2', 'asset-4', 'asset-6'].map((a) => (
                  <img
                    key={a}
                    src={`https://cdn.bndlyr.com/s9a0uwrhnbc84fek/_assets/${a}.png`}
                    alt="Certificação"
                    className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
