import { Star } from 'lucide-react';
import { TEAMS } from '../data/teams.js';

export default function CountriesTab({ favorites, FLAGS, toggleFavorite, goToTeam }) {
  return (
    <div>
      <div style={{ padding: '10px 14px 4px', fontSize: 11, color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        48 équipes qualifiées
      </div>
      {TEAMS.map(team => {
        const isFav = favorites.includes(team);
        return (
          <div key={team} style={{
            display: 'flex', alignItems: 'center', padding: '11px 14px',
            borderBottom: '1px solid #e8e4dc', background: '#fff',
          }}>
            <button
              onClick={() => goToTeam(team)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                display: 'flex', alignItems: 'center', gap: 10, flex: 1, textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 24 }}>{FLAGS[team]}</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: '#2d3f35' }}>{team}</span>
            </button>
            <button
              onClick={() => toggleFavorite(team)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            >
              <Star
                size={20}
                fill={isFav ? '#b5714a' : 'none'}
                color={isFav ? '#b5714a' : '#ccc'}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
