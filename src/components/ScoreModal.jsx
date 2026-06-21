import { useState } from 'react';
import { X } from 'lucide-react';

export default function ScoreModal({ match, flags, onClose, onSave }) {
  const [home, setHome] = useState(match.score ? String(match.score[0]) : '');
  const [away, setAway] = useState(match.score ? String(match.score[1]) : '');

  const handleSave = () => {
    const h = parseInt(home, 10);
    const a = parseInt(away, 10);
    if (isNaN(h) || isNaN(a) || h < 0 || a < 0) return;
    onSave([h, a], 'done');
  };

  const handleReset = () => onSave(null, 'upcoming');

  const inputStyle = {
    width: 56, textAlign: 'center', fontSize: 24, fontWeight: 700,
    border: '2px solid #2d3f35', borderRadius: 8, padding: '8px 4px',
    background: '#f5f2ec', color: '#2d3f35', outline: 'none',
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 16,
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: 16, padding: 24, width: '100%', maxWidth: 340,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#2d3f35' }}>Saisir le score</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
            <X size={20} />
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{flags[match.home] || ''}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#555', marginBottom: 8 }}>{match.home}</div>
            <input
              type="number" min="0" max="99" value={home}
              onChange={e => setHome(e.target.value)}
              style={inputStyle}
              autoFocus
            />
          </div>
          <span style={{ fontSize: 20, color: '#ccc', fontWeight: 300 }}>–</span>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{flags[match.away] || ''}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#555', marginBottom: 8 }}>{match.away}</div>
            <input
              type="number" min="0" max="99" value={away}
              onChange={e => setAway(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
        <button
          onClick={handleSave}
          style={{
            width: '100%', padding: '12px', borderRadius: 10, border: 'none',
            background: '#2d3f35', color: '#f5f2ec', fontWeight: 700, fontSize: 15,
            cursor: 'pointer', marginBottom: 8,
          }}
        >
          Enregistrer
        </button>
        {match.status === 'done' && (
          <button
            onClick={handleReset}
            style={{
              width: '100%', padding: '10px', borderRadius: 10, border: '1px solid #ddd',
              background: '#fff', color: '#999', fontWeight: 500, fontSize: 13,
              cursor: 'pointer',
            }}
          >
            Effacer le score
          </button>
        )}
      </div>
    </div>
  );
}
