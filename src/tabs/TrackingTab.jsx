import { useState } from 'react';
import { Star, X, ChevronDown } from 'lucide-react';
import { TEAMS } from '../data/teams.js';
import MatchRow from '../components/MatchRow.jsx';

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function TrackingTab({ matches, trackingTeam, setTrackingTeam, favorites, FLAGS, GROUP_COLORS, updateScore, goToTeam, toggleFavorite }) {
  const [showPicker, setShowPicker] = useState(false);
  const [search, setSearch] = useState('');

  const teamMatches = trackingTeam
    ? matches.filter(m => m.home === trackingTeam || m.away === trackingTeam)
    : [];

  const filtered = TEAMS.filter(t =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  const isFav = trackingTeam && favorites.includes(trackingTeam);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Team selector */}
      <div style={{ padding: '12px 14px', background: '#fff', borderBottom: '1px solid #e8e4dc', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            onClick={() => setShowPicker(true)}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
              background: '#f5f2ec', border: '1px solid #ddd', borderRadius: 10,
              cursor: 'pointer', textAlign: 'left',
            }}
          >
            {trackingTeam
              ? <><span style={{ fontSize: 22 }}>{FLAGS[trackingTeam]}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#2d3f35' }}>{trackingTeam}</span></>
              : <span style={{ fontSize: 13, color: '#999' }}>Choisir une équipe…</span>
            }
            <ChevronDown size={16} color="#999" style={{ marginLeft: 'auto' }} />
          </button>
          {trackingTeam && (
            <button
              onClick={() => toggleFavorite(trackingTeam)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            >
              <Star size={22} fill={isFav ? '#b5714a' : 'none'} color={isFav ? '#b5714a' : '#ccc'} />
            </button>
          )}
        </div>
      </div>

      {/* Matches */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {!trackingTeam && (
          <div style={{ padding: 32, textAlign: 'center', color: '#999' }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>⭐</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#666' }}>Suivez votre équipe</div>
            <div style={{ fontSize: 13, marginTop: 8 }}>Sélectionnez une équipe ci-dessus</div>
          </div>
        )}
        {trackingTeam && teamMatches.length === 0 && (
          <div style={{ padding: 24, textAlign: 'center', color: '#999', fontSize: 13 }}>
            Aucun match trouvé pour {trackingTeam}
          </div>
        )}
        {teamMatches.map(m => (
          <div key={m.id}>
            <div style={{ padding: '6px 14px', background: '#f0ece3', fontSize: 11, color: '#888', fontWeight: 600 }}>
              {formatDate(m.date)} — {m.time}
            </div>
            <MatchRow match={m} flags={FLAGS} goToTeam={goToTeam}
              onUpdateScore={updateScore} groupColors={GROUP_COLORS} />
          </div>
        ))}
      </div>

      {/* Team picker modal */}
      {showPicker && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
          zIndex: 1000, display: 'flex', flexDirection: 'column',
        }} onClick={() => setShowPicker(false)}>
          <div style={{
            background: '#fff', marginTop: 'auto', borderRadius: '16px 16px 0 0',
            maxHeight: '80vh', display: 'flex', flexDirection: 'column',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher une équipe…"
                style={{
                  flex: 1, padding: '10px 14px', borderRadius: 10,
                  border: '1px solid #ddd', fontSize: 14, outline: 'none',
                  background: '#f5f2ec',
                }}
              />
              <button onClick={() => setShowPicker(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
                <X size={22} />
              </button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {filtered.map(team => (
                <button
                  key={team}
                  onClick={() => { setTrackingTeam(team); setShowPicker(false); setSearch(''); }}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px', background: team === trackingTeam ? '#f0ece3' : '#fff',
                    border: 'none', borderBottom: '1px solid #f0ece3',
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 22 }}>{FLAGS[team]}</span>
                  <span style={{ fontSize: 14, color: '#2d3f35', fontWeight: team === trackingTeam ? 700 : 400 }}>{team}</span>
                  {favorites.includes(team) && <Star size={14} fill="#b5714a" color="#b5714a" style={{ marginLeft: 'auto' }} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
