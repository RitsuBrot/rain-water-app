import React, { useState } from 'react';
import { Droplets, Settings, Info, Plus, X, Shield, Mail, Lock, ArrowRight, Calendar, ChevronRight, Bell, LogOut, UserPlus, CheckCircle2 } from 'lucide-react';

// --- COMPONENTE DE LOGIN ---
function Login({ onLogin }: { onLogin: () => void }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error
  const [isRegistering, setIsRegistering] = useState(false); // Para cambiar entre Login y Registro

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos

    if (isRegistering) {
      // Lógica simple de registro simulado
      if (usuario && password) {
        alert('¡Cuenta creada con éxito! Ahora inicia sesión.');
        setIsRegistering(false);
        setUsuario('');
        setPassword('');
      } else {
        setError('Por favor, llena todos los campos.');
      }
      return;
    }

    // Lógica de Login
    if (usuario === 'User 1' && password === 'RainWater') {
      onLogin();
    } else {
      // Mostramos el error en pantalla, no en una ventana
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0f14', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#0e7490', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid #22d3ee' }}>
        <Droplets size={40} color="#22d3ee" />
      </div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Rain Water</h1>
      <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '300px' }}>Cuida el agua de tu hogar desde un solo lugar.</p>

      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '380px', backgroundColor: '#111920', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #1f2937', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: '#22d3ee' }}>
          <Shield size={18} />
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'white' }}>
            {isRegistering ? 'Crear cuenta' : 'Inicia sesión'}
          </h2>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
          {isRegistering ? 'Registra tus datos para empezar' : 'Accede al estado de tu filtro de agua'}
        </p>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', display: 'block', marginBottom: '0.25rem' }}>Usuario</label>
          <div style={{ position: 'relative' }}>
            <Mail size={18} color="#6b7280" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="User 1" value={usuario} onChange={(e) => setUsuario(e.target.value)} style={{ width: '100%', backgroundColor: '#0a0f14', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.75rem 1rem 0.75rem 2.5rem', color: 'white', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db', display: 'block', marginBottom: '0.25rem' }}>Contraseña</label>
          <div style={{ position: 'relative' }}>
            <Lock size={18} color="#6b7280" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', backgroundColor: '#0a0f14', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.75rem 1rem 0.75rem 2.5rem', color: 'white', outline: 'none', boxSizing: 'border-box' }} />
          </div>
        </div>

        {/* AQUI APARECE EL MENSAJE DE ERROR EN ROJO */}
        {error && (
          <div style={{ color: '#ef4444', fontSize: '0.875rem', marginBottom: '1rem', textAlign: 'center', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '0.5rem' }}>
            {error}
          </div>
        )}

        <button type="submit" style={{ width: '100%', backgroundColor: '#06b6d4', color: 'black', fontWeight: '600', padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', border: 'none', cursor: 'pointer' }}>
          {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
          {isRegistering ? <UserPlus size={18} /> : <ArrowRight size={18} />}
        </button>

        {/* BOTÓN PARA CAMBIAR ENTRE LOGIN Y REGISTRO */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button type="button" onClick={() => { setIsRegistering(!isRegistering); setError(''); }} style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '0.875rem', cursor: 'pointer', textDecoration: 'underline' }}>
            {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate aquí'}
          </button>
        </div>
      </form>
      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '2rem' }}>((•)) Lecturas simuladas · Sin sensor</p>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL (DASHBOARD) ---
function Dashboard() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [showModal, setShowModal] = useState(false);
  const [nuevoFiltro, setNuevoFiltro] = useState('');
  const [notificaciones, setNotificaciones] = useState(true);
  
  // AQUI GUARDAMOS LA LISTA DE FILTROS. Empieza con el de la casa.
  const [listaFiltros, setListaFiltros] = useState([
    { id: 1, nombre: 'Filtro principal', ubicacion: 'Toda la casa', estado: 'ESTABLE', presion: '62 PSI', suciedad: '68%', estadoTexto: 'Buen estado', presionWidth: '75%', suciedadWidth: '68%' }
  ]);

  // FUNCIÓN PARA AGREGAR UN NUEVO FILTRO A LA LISTA
  const agregarFiltro = () => {
    if (nuevoFiltro.trim() !== '') {
      const nuevo = {
        id: Date.now(), // Genera un ID único
        nombre: nuevoFiltro,
        ubicacion: 'Nueva ubicación',
        estado: 'NUEVO',
        presion: '0 PSI',
        suciedad: '0%',
        estadoTexto: 'Recién instalado',
        presionWidth: '0%',
        suciedadWidth: '0%'
      };
      
      // Agregamos el nuevo filtro a la lista existente
      setListaFiltros([...listaFiltros, nuevo]);
      setNuevoFiltro('');
      setShowModal(false);
    }
  };

  const cerrarSesion = () => {
    window.location.reload();
  };

  return (
    <div style={{ backgroundColor: '#0a0f14', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', paddingBottom: '80px', maxWidth: '450px', margin: '0 auto', position: 'relative' }}>
      
      {activeTab === 'inicio' && (
        <div style={{ padding: '1.5rem' }}>
          <header style={{ marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Mi Filtro - Casa</h1>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: '0.25rem 0 0 0' }}>Monitoreo del sistema de agua</p>
          </header>

          {/* AQUI RECORREMOS LA LISTA Y DIBUJAMOS UNA TARJETA POR CADA FILTRO */}
          {listaFiltros.map((filtro) => (
            <div key={filtro.id} style={{ backgroundColor: '#111920', borderRadius: '1rem', padding: '1.25rem', border: '1px solid #1f2937', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', backgroundColor: '#164e63', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Droplets color="#22d3ee" size={24} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0 }}>{filtro.nombre}</h2>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>{filtro.ubicacion}</p>
                  </div>
                </div>
                <span style={{ backgroundColor: filtro.estado === 'ESTABLE' ? '#064e3b' : '#1e3a8a', color: filtro.estado === 'ESTABLE' ? '#34d399' : '#60a5fa', fontSize: '0.75rem', fontWeight: '500', padding: '0.25rem 0.625rem', borderRadius: '0.375rem', border: `1px solid ${filtro.estado === 'ESTABLE' ? '#065f46' : '#1e40af'}` }}>{filtro.estado}</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: '0 0 0.25rem 0' }}>Estado del filtro</p>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>{filtro.estadoTexto}</p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: '#d1d5db' }}>Presión del agua</span>
                  <span style={{ fontWeight: '500', color: '#22d3ee' }}>{filtro.presion}</span>
                </div>
                <div style={{ width: '100%', backgroundColor: '#374151', borderRadius: '9999px', height: '8px' }}>
                  <div style={{ backgroundColor: '#06b6d4', height: '8px', borderRadius: '9999px', width: filtro.presionWidth }}></div>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.25rem 0 0 0' }}>Rango recomendado: 45-65 PSI</p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  <span style={{ color: '#d1d5db' }}>Nivel de suciedad</span>
                  <span style={{ fontWeight: '500', color: '#eab308' }}>{filtro.suciedad}</span>
                </div>
                <div style={{ width: '100%', backgroundColor: '#374151', borderRadius: '9999px', height: '8px' }}>
                  <div style={{ backgroundColor: '#eab308', height: '8px', borderRadius: '9999px', width: filtro.suciedadWidth }}></div>
                </div>
              </div>
            </div>
          ))}

          <div style={{ backgroundColor: '#111920', borderRadius: '0.75rem', padding: '1rem', border: '1px solid #1f2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Calendar color="#22d3ee" size={20} />
              <div>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Último mantenimiento</p>
                <p style={{ fontSize: '0.875rem', fontWeight: '500', margin: 0 }}>20 de noviembre de 2026</p>
              </div>
            </div>
            <ChevronRight color="#6b7280" size={20} />
          </div>

          <p style={{ fontSize: '0.75rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Info size={14} /> Lecturas de ejemplo. Aún no hay un sensor conectado.
          </p>
        </div>
      )}

      {activeTab === 'ajustes' && (
        <div style={{ padding: '1.5rem' }}>
          <header style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Ajustes</h1>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: '0.25rem 0 0 0' }}>Preferencias de Rain Water</p>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ backgroundColor: '#111920', borderRadius: '0.75rem', border: '1px solid #1f2937', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Bell color="#22d3ee" size={22} />
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '600', margin: 0 }}>Notificaciones</h3>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Avisos sobre el estado del filtro</p>
                </div>
              </div>
              <button onClick={() => setNotificaciones(!notificaciones)} style={{ position: 'relative', display: 'inline-flex', height: '24px', width: '44px', alignItems: 'center', borderRadius: '9999px', backgroundColor: notificaciones ? '#06b6d4' : '#4b5563', border: 'none', cursor: 'pointer' }}>
                <span style={{ display: 'inline-block', height: '16px', width: '16px', borderRadius: '50%', backgroundColor: 'black', transform: notificaciones ? 'translateX(24px)' : 'translateX(4px)', transition: 'transform 0.2s' }} />
              </button>
            </div>

            <div onClick={cerrarSesion} style={{ backgroundColor: '#111920', borderRadius: '0.75rem', border: '1px solid #1f2937', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <LogOut color="#ef4444" size={22} />
                <div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: '600', margin: 0, color: '#f87171' }}>Cerrar sesión</h3>
                  <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>Salir de Rain Water</p>
                </div>
              </div>
              <ChevronRight color="#6b7280" size={20} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inicio' && (
        <button onClick={() => setShowModal(true)} style={{ position: 'fixed', bottom: '100px', right: '20px', width: '56px', height: '56px', backgroundColor: '#06b6d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(6, 182, 212, 0.4)', zIndex: 50 }}>
          <Plus size={28} />
        </button>
      )}

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', zIndex: 100 }}>
          <div style={{ backgroundColor: '#111920', width: '100%', maxWidth: '350px', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #374151' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Nuevo Filtro</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}><X size={24} /></button>
            </div>
            <input type="text" placeholder="Ej. Filtro Cocina" value={nuevoFiltro} onChange={(e) => setNuevoFiltro(e.target.value)} style={{ width: '100%', backgroundColor: '#0a0f14', border: '1px solid #374151', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white', outline: 'none', marginBottom: '1rem', boxSizing: 'border-box' }} />
            <button onClick={agregarFiltro} style={{ width: '100%', backgroundColor: '#06b6d4', color: 'black', fontWeight: '600', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>Guardar Filtro</button>
          </div>
        </div>
      )}

      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: '450px', margin: '0 auto', backgroundColor: '#111920', borderTop: '1px solid #1f2937', display: 'flex', justifyContent: 'space-around', padding: '0.75rem 0', zIndex: 40 }}>
        <button onClick={() => setActiveTab('inicio')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'inicio' ? '#22d3ee' : '#6b7280', cursor: 'pointer' }}>
          <Droplets size={20} /><span style={{ fontSize: '10px', marginTop: '4px' }}>Inicio</span>
        </button>
        <button onClick={() => setActiveTab('ajustes')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'ajustes' ? '#22d3ee' : '#6b7280', cursor: 'pointer' }}>
          <Settings size={20} /><span style={{ fontSize: '10px', marginTop: '4px' }}>Ajustes</span>
        </button>
      </nav>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard />;
}