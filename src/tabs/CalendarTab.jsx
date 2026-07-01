import { useMemo } from 'react';
import MatchRow from '../components/MatchRow.jsx';

const TODAY = new Date().toISOString().slice(0, 10);

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
}

export default function CalendarTab({ matches, FLAGS, GROUP_COLORS, updateScore, goToTeam }) {
  const byDate = useMemo(() => {
    const map = {};
    matches.forEach(m => {
      if (m.date < TODAY) return;
      if (!map[m.date]) map[m.date] = [];
      map[m.date].push(m);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [matches]);

  return (
    <div>
      {byDate.map(([date, dayMatches]) => (
        <section key={date}>
          <div style={{
            padding: '10px 14px', background: date === TODAY ? '#2d3f35' : '#eae6de',
            color: date === TODAY ? '#f5f2ec' : '#555',
            fontSize: 12, fontWeight: 700, textTransform: 'capitalize', letterSpacing: 0.3,
            position: 'sticky', top: 0, zIndex: 10,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            {date === TODAY && <span style={{ background: '#b5714a', padding: '1px 6px', borderRadius: 3, fontSize: 9 }}>AUJOURD'HUI</span>}
            {formatDate(date)}
            <span style={{ marginLeft: 'auto', fontWeight: 400, opacity: 0.7, fontSize: 11 }}>
              {dayMatches.length} match{dayMatches.length > 1 ? 's' : ''}
            </span>
          </div>
          {dayMatches.map(m => (
            <MatchRow key={m.id} match={m} flags={FLAGS} goToTeam={goToTeam}
              onUpdateScore={updateScore} groupColors={GROUP_COLORS} />
          ))}
        </section>
      ))}
    </div>
  );
}
