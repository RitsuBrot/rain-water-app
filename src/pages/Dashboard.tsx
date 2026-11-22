import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Droplets, Gauge, Settings as SettingsIcon, Info, Plus, X } from 'lucide-react';

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [nuevoFiltro, setNuevoFiltro] = useState('');
  const navigate = useNavigate();

  const agregarFiltro = () => {
    if (nuevoFiltro.trim() !== '') {
      alert(`¡Filtro "${nuevoFiltro}" agregado con éxito! (Aquí conectarías la base de datos)`);
      setNuevoFiltro('');
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen p-4 pb-24 relative">
      <header className="mb-6 mt-4">
        <h1 className="text-2xl font-bold">Mi Filtro - Casa</h1>
        <p className="text-sm text-gray-400">Monitoreo del sistema de agua</p>
      </header>

      <div className="bg-card-bg rounded-2xl p-5 border border-gray-800 mb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-900/30 flex items-center justify-center">
              <Droplets className="text-cyan-400" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Filtro principal</h2>
              <p className="text-xs text-gray-400">Toda la casa</p>
            </div>
          </div>
          <span className="bg-green-900/30 text-green-400 text-xs font-medium px-2.5 py-1 rounded-md border border-green-800/50">ESTABLE</span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-1">Estado del filtro</p>
          <p className="text-xl font-semibold text-white">Buen estado</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Presión del agua</span>
            <span className="font-medium text-cyan-400">62 PSI</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-300">Nivel de suciedad</span>
            <span className="font-medium text-yellow-500">68%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
      </div>

      {/* BOTÓN FLOTANTE PARA AGREGAR FILTRO */}
      <button 
        onClick={() => setShowModal(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-cyan-500 hover:bg-cyan-400 rounded-full flex items-center justify-center text-black shadow-lg shadow-cyan-500/30 transition-transform active:scale-95 z-50"
      >
        <Plus size={28} />
      </button>

      {/* VENTANA EMERGENTE (MODAL) PARA AGREGAR FILTRO */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-card-bg w-full max-w-sm rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Nuevo Filtro</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
            </div>
            <p className="text-sm text-gray-400 mb-4">Ingresa el nombre del nuevo filtro (ej. Cocina, Jardín).</p>
            <input 
              type="text" 
              value={nuevoFiltro}
              onChange={(e) => setNuevoFiltro(e.target.value)}
              placeholder="Nombre del filtro"
              className="w-full bg-dark-bg border border-gray-700 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-cyan-500 mb-4"
            />
            <button onClick={agregarFiltro} className="w-full bg-cyan-500 text-black font-semibold py-3 rounded-lg">
              Guardar Filtro
            </button>
          </div>
        </div>
      )}

      {/* BARRA DE NAVEGACIÓN INFERIOR */}
      <nav className="fixed bottom-0 left-0 w-full max-w-[450px] left-1/2 -translate-x-1/2 bg-card-bg border-t border-gray-800 flex justify-around py-3 z-40">
        <button className="flex flex-col items-center text-cyan-400"><Droplets size={20} /><span className="text-[10px] mt-1">Inicio</span></button>
        <Link to="/settings" className="flex flex-col items-center text-gray-500 hover:text-cyan-400 transition-colors">
          <SettingsIcon size={20} /><span className="text-[10px] mt-1">Ajustes</span>
        </Link>
      </nav>
    </div>
  );
}