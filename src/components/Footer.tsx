import { Linkedin, Instagram, Facebook } from 'lucide-react';

const links = {
  Empresa: ['Sobre a MCT', 'História', 'Filosofia', 'Sustentabilidade', 'Carreiras'],
  Atividades: ['Produto Acabado', 'Artesanato', 'OEM', 'Indústria', 'Equipamento'],
  Latão: ['A Liga', 'História', 'Aplicações', 'Qualidade'],
  Apoio: ['Contactos', 'Política de Privacidade', 'FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-white text-lg">MCT</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Especialistas em latão há mais de 60 anos. Made in Europe.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-stone-400" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-stone-400 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © MCT 2024 — Metalúrgica Central da Trofa
          </p>
          <p className="text-stone-600 text-xs">
            V.N. de Famalicão, Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
