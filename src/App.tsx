import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Production from './components/Production';
import Brass from './components/Brass';
import About from './components/About';
import Sustainability from './components/Sustainability';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

type View = 'home' | 'login' | 'admin';

function AppContent() {
  const { session, loading } = useAuth();
  const [view, setView] = useState<View>('home');

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <span className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (view === 'login' && !session) {
    return (
      <LoginPage
        onSuccess={() => setView('admin')}
      />
    );
  }

  if ((view === 'admin' || view === 'login') && session) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onAdminClick={() => setView(session ? 'admin' : 'login')} />
      <main>
        <Hero />
        <Activities />
        <Production />
        <Brass />
        <About />
        <Sustainability />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
