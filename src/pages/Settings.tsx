import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, Bell, LogOut, ChevronRight, Droplets, Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  const [notificaciones, setNotificaciones] = useState(true);
  const navigate = useNavigate();

  const cerrarSesion = () => {
    alert('Has cerrado sesión.');
    navigate('/'); // Te regresa a la pantalla de Login
  };

  return (
    <div className="min-h-screen p-6 pb-24">
      <header className="mb-8 mt-4">
        <h1 className="text-2xl font-bold">Ajustes</h1>
        <p className="text-sm text-gray-400">Preferencias de Rain Water</p>
      </header>

      <div className="space-y-4">
        {/* Botón de Notificaciones Interactivo */}
        <div className="bg-card-bg rounded-xl border border-gray-800 flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Bell className="text-cyan-400" size={22} />
            <div>
              <h3 className="font-semibold text-sm">Notificaciones</h3>
              <p className="text-xs text-gray-400">Avisos sobre el estado del filtro</p>
            </div>
          </div>
          <button 
            onClick={() => setNotificaciones(!notificaciones)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificaciones ? 'bg-cyan-500' : 'bg-gray-600'}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${notificaciones ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* Botón de Cerrar Sesión */}
        <div onClick={cerrarSesion} className="bg-card-bg rounded-xl border border-gray-800 flex items-center justify-between p-4 cursor-pointer hover:bg-red-950/20 hover:border-red-900/50 transition-colors">
          <div className="flex items-center gap-4">
            <LogOut className="text-red-500" size={22} />
            <div>
              <h3 className="font-semibold text-sm text-red-400">Cerrar sesión</h3>
              <p className="text-xs text-gray-400">Salir de Rain Water</p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" size={20} />
        </div>
      </div>

      {/* BARRA DE NAVEGACIÓN INFERIOR */}
      <nav className="fixed bottom-0 left-0 w-full max-w-[450px] left-1/2 -translate-x-1/2 bg-card-bg border-t border-gray-800 flex justify-around py-3 z-40">
        <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center text-gray-500 hover:text-cyan-400 transition-colors">
          <Droplets size={20} /><span className="text-[10px] mt-1">Inicio</span>
        </button>
        <button className="flex flex-col items-center text-cyan-400"><SettingsIcon size={20} /><span className="text-[10px] mt-1">Ajustes</span></button>
      </nav>
    </div>
  );
}