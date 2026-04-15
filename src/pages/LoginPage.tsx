import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

type Mode = 'login' | 'register';

interface Props {
  onSuccess: () => void;
}

export default function LoginPage({ onSuccess }: Props) {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const reset = () => {
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();

    if (mode === 'register' && password !== confirmPassword) {
      setError('As passwords não coincidem.');
      return;
    }

    if (password.length < 6) {
      setError('A password deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError('Email ou password incorretos.');
      } else {
        onSuccess();
      }
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else if (data.user && !data.session) {
        setError('Confirma o teu email antes de iniciar sessão. Verifica a tua caixa de entrada.');
      } else if (data.session) {
        onSuccess();
      } else {
        setSuccess('Conta criada com sucesso! Pode agora iniciar sessão.');
        setMode('login');
        setPassword('');
        setConfirmPassword('');
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://img.bndlyr.com/s9a0uwrhnbc84fek/_assets/mct-047.jpg?fit=fill&w=1600&q=85"
          alt="MCT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60" />
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-white font-bold text-lg">MCT</span>
          </a>
          <div>
            <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Área Reservada</p>
            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              Gestão interna<br />MCT
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Acesso exclusivo para a equipa MCT. Entre com as suas credenciais para aceder ao painel de administração.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-stone-900 font-bold text-lg">MCT</span>
            </a>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-stone-900 mb-2">
              {mode === 'login' ? 'Iniciar Sessão' : 'Criar Conta'}
            </h1>
            <p className="text-stone-500 text-sm">
              {mode === 'login'
                ? 'Entre com as suas credenciais para aceder ao painel.'
                : 'Preencha os dados para criar uma nova conta.'}
            </p>
          </div>

          <div className="flex bg-stone-100 rounded-xl p-1 mb-8">
            {(['login', 'register'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); reset(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  mode === m
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                {m === 'login' ? 'Entrar' : 'Registar'}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-5 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                placeholder="email@empresa.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-11 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Confirmar Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  placeholder="••••••••"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-900 font-semibold py-3 rounded-xl transition-colors text-sm mt-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
              ) : (
                <>
                  {mode === 'login' ? 'Entrar' : 'Criar Conta'}
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-stone-400 text-xs">
            <a href="/" className="hover:text-stone-600 transition-colors">
              ← Voltar ao website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
