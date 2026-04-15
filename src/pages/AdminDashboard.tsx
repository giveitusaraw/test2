import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Package, label: 'Produtos', active: false },
  { icon: Users, label: 'Utilizadores', active: false },
  { icon: FileText, label: 'Encomendas', active: false },
  { icon: Settings, label: 'Definições', active: false },
];

const stats = [
  { label: 'Produtos Ativos', value: '—', sub: 'Em breve' },
  { label: 'Encomendas', value: '—', sub: 'Em breve' },
  { label: 'Utilizadores', value: '—', sub: 'Em breve' },
  { label: 'Receita Mensal', value: '—', sub: 'Em breve' },
];

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex">
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-stone-900 flex flex-col transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-bold">MCT Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-stone-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-amber-500 text-stone-900'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              <item.icon size={17} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-stone-800">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <LogOut size={17} />
            Terminar Sessão
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-stone-100 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-stone-500 hover:text-stone-900"
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="font-bold text-stone-900">Dashboard</h1>
              <p className="text-stone-400 text-xs">Bem-vindo ao painel de administração</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative w-9 h-9 rounded-lg border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-colors">
              <Bell size={17} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-stone-100">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-amber-700 font-bold text-xs">
                  {user?.email?.[0]?.toUpperCase() ?? 'A'}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-stone-900 text-sm font-medium leading-tight">
                  {user?.email?.split('@')[0] ?? 'Admin'}
                </p>
                <p className="text-stone-400 text-xs">{user?.email}</p>
              </div>
              <ChevronDown size={14} className="text-stone-400" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-stone-100 p-6">
                <p className="text-stone-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-stone-900 mb-1">{stat.value}</p>
                <p className="text-stone-300 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-stone-900">Atividade Recente</h2>
                <span className="text-xs text-stone-400 bg-stone-50 px-2.5 py-1 rounded-full">Em breve</span>
              </div>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-3">
                  <FileText size={22} className="text-stone-300" />
                </div>
                <p className="text-stone-400 text-sm">Nenhuma atividade recente</p>
                <p className="text-stone-300 text-xs mt-1">Os dados aparecerão aqui quando disponíveis</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-stone-900">Encomendas Pendentes</h2>
                <span className="text-xs text-stone-400 bg-stone-50 px-2.5 py-1 rounded-full">Em breve</span>
              </div>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center mb-3">
                  <Package size={22} className="text-stone-300" />
                </div>
                <p className="text-stone-400 text-sm">Sem encomendas pendentes</p>
                <p className="text-stone-300 text-xs mt-1">As encomendas aparecerão aqui quando disponíveis</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
