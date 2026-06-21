const TABS = [
  { id: 'today',    label: "Aujourd'hui", icon: '📅' },
  { id: 'calendar', label: 'Calendrier',  icon: '🗓️' },
  { id: 'pays',     label: 'Pays',        icon: '🌍' },
  { id: 'suivi',    label: 'Suivi',       icon: '⭐' },
];

export default function TabBar({ tab, setTab }) {
  return (
    <nav style={{
      display: 'flex', background: '#2d3f35', flexShrink: 0,
      borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      {TABS.map(t => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          style={{
            flex: 1, border: 'none', cursor: 'pointer', padding: '10px 4px 12px',
            background: tab === t.id ? '#3d5448' : 'transparent',
            color: tab === t.id ? '#f5f2ec' : 'rgba(245,242,236,0.55)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            transition: 'background 0.15s',
          }}
        >
          <span style={{ fontSize: 20 }}>{t.icon}</span>
          <span style={{ fontSize: 10, fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}
