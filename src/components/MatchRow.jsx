import { useState } from 'react';
import { Pencil, AlertCircle } from 'lucide-react';
import ScoreModal from './ScoreModal.jsx';

function TvBadge({ tv }) {
  const isM6 = tv === 'M6+beIN';
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 3,
      background: isM6 ? '#e8a000' : '#1a5276',
      color: '#fff', letterSpacing: 0.3, flexShrink: 0,
    }}>
      {isM6 ? 'M6+beIN' : 'beIN'}
    </span>
  );
}

function TeamLabel({ name, flags, goToTeam, align = 'left' }) {
  const flag = flags[name] || '';
  return (
    <button
      onClick={() => goToTeam && goToTeam(name)}
      style={{
        background: 'none', border: 'none', cursor: goToTeam ? 'pointer' : 'default',
        padding: 0, display: 'flex', alignItems: 'center',
        gap: 4, flexDirection: align === 'right' ? 'row-reverse' : 'row',
        fontSize: 13, fontWeight: 500, color: '#2d3f35',
        flex: 1, textAlign: align, maxWidth: '42%',
        overflow: 'hidden',
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0 }}>{flag}</span>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: 12 }}>{name}</span>
    </button>
  );
}

export default function MatchRow({ match, flags, goToTeam, onUpdateScore, groupColors }) {
  const [showModal, setShowModal] = useState(false);
  const { home, away, time, city, venue, group, round, tv, status, score, conflict } = match;
  const label = group ? `Gr. ${group}` : round;
  const groupColor = group ? (groupColors?.[group] || '#555') : '#555';

  const centerContent = status === 'done' && score
    ? <span style={{ fontSize: 16, fontWeight: 700, color: conflict ? '#c0392b' : '#2d3f35', display: 'flex', alignItems: 'center', gap: 4 }}>
        {score[0]}–{score[1]}
        {conflict && <AlertCircle size={14} color="#c0392b" />}
      </span>
    : <span style={{ fontSize: 11, color: '#888', fontWeight: 500 }}>{time}</span>;

  return (
    <>
      <div style={{
        display: 'flex', flexDirection: 'column', padding: '10px 14px',
        borderBottom: '1px solid #e8e4dc', position: 'relative',
        background: status === 'done' ? 'rgba(45,63,53,0.04)' : '#fff',
      }}>
        {/* Top row: label + tv + edit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <span style={{
            fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 3,
            background: groupColor, color: '#fff', letterSpacing: 0.5,
          }}>{label}</span>
          <span style={{ fontSize: 10, color: '#999', flex: 1 }}>{city} · {venue}</span>
          <TvBadge tv={tv} />
          <button
            onClick={() => setShowModal(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, color: '#999', flexShrink: 0 }}
            title="Saisir/modifier le score"
          >
            <Pencil size={13} />
          </button>
        </div>
        {/* Teams + score */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <TeamLabel name={home} flags={flags} goToTeam={goToTeam} align="left" />
          <div style={{ flexShrink: 0, minWidth: 52, textAlign: 'center' }}>{centerContent}</div>
          <TeamLabel name={away} flags={flags} goToTeam={goToTeam} align="right" />
        </div>
      </div>
      {showModal && (
        <ScoreModal
          match={match}
          flags={flags}
          onClose={() => setShowModal(false)}
          onSave={(score, status) => {
            onUpdateScore(match.id, score, status);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}
