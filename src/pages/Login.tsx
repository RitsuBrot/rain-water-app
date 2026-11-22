import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // AQUÍ ESTÁ LA MAGIA DE TU USUARIO Y CONTRASEÑA
    if (usuario === 'User 1' && password === 'RainWater') {
      navigate('/dashboard'); // Si es correcto, entra a la app
    } else {
      alert('Usuario o contraseña incorrectos. Usa: User 1 / RainWater');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <div className="w-20 h-20 rounded-full bg-cyan-900/30 flex items-center justify-center mb-6 border border-cyan-500/20">
        <Shield className="w-10 h-10 text-cyan-400" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Rain Water</h1>
      <p className="text-gray-400 text-center mb-10 max-w-xs">Cuida el agua de tu hogar desde un solo lugar.</p>

      <form onSubmit={handleLogin} className="w-full max-w-sm bg-card-bg rounded-2xl p-6 border border-gray-800 shadow-xl">
        <div className="flex items-center gap-2 mb-1 text-cyan-400">
          <Shield size={18} />
          <h2 className="text-lg font-semibold text-white">Inicia sesión</h2>
        </div>
        <p className="text-sm text-gray-400 mb-6">Accede al estado de tu filtro de agua</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Usuario</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="User 1" 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full bg-dark-bg border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300 mb-1 block">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark-bg border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
              />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
          Iniciar sesión
          <ArrowRight size={18} />
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-8">((•)) Lecturas simuladas · Sin sensor</p>
    </div>
  );
}