import MatchRow from '../components/MatchRow.jsx';

const TODAY = new Date().toISOString().slice(0, 10);

export default function TodayTab({ matches, favorites, FLAGS, GROUP_COLORS, updateScore, goToTeam }) {
  const todayMatches = matches.filter(m => m.date === TODAY);
  const favMatches = todayMatches.filter(m =>
    favorites.includes(m.home) || favorites.includes(m.away)
  );
  const otherMatches = todayMatches.filter(m =>
    !favorites.includes(m.home) && !favorites.includes(m.away)
  );

  if (!todayMatches.length) {
    return (
      <div style={{ padding: 32, textAlign: 'center', color: '#999' }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#666' }}>Aucun match aujourd'hui</div>
        <div style={{ fontSize: 13, marginTop: 8 }}>Consultez l'onglet Calendrier</div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ padding: '12px 14px 4px', fontSize: 12, color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        {TODAY} — {todayMatches.length} match{todayMatches.length > 1 ? 's' : ''}
      </div>

      {favMatches.length > 0 && (
        <section>
          <div style={{
            background: '#2d3f35', color: '#f5f2ec', padding: '8px 14px',
            fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            ⭐ Vos favoris jouent aujourd'hui
          </div>
          {favMatches.map(m => (
            <MatchRow key={m.id} match={m} flags={FLAGS} goToTeam={goToTeam}
              onUpdateScore={updateScore} groupColors={GROUP_COLORS} />
          ))}
        </section>
      )}

      {otherMatches.length > 0 && (
        <section>
          {favMatches.length > 0 && (
            <div style={{ background: '#f0ece3', padding: '8px 14px', fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Autres matchs
            </div>
          )}
          {otherMatches.map(m => (
            <MatchRow key={m.id} match={m} flags={FLAGS} goToTeam={goToTeam}
              onUpdateScore={updateScore} groupColors={GROUP_COLORS} />
          ))}
        </section>
      )}
    </div>
  );
}
