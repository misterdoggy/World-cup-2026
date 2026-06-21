export default function FavoritesBanner({ favorites, goToTeam, FLAGS }) {
  if (!favorites.length) return null;
  return (
    <div style={{
      background: '#3d5448', borderBottom: '1px solid rgba(255,255,255,0.1)',
      padding: '6px 12px', display: 'flex', gap: 8, overflowX: 'auto',
      flexShrink: 0, alignItems: 'center',
    }}>
      <span style={{ fontSize: 10, color: 'rgba(245,242,236,0.6)', flexShrink: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>★</span>
      {favorites.map(team => (
        <button
          key={team}
          onClick={() => goToTeam(team)}
          style={{
            background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 20,
            padding: '4px 10px', cursor: 'pointer', color: '#f5f2ec',
            fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
          }}
        >
          {FLAGS[team]} {team}
        </button>
      ))}
    </div>
  );
}
