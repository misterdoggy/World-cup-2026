import { useState, useEffect, useCallback, useRef } from 'react';
import { ALL_MATCHES } from './data/matches.js';
import { FLAGS, GROUP_COLORS } from './data/teams.js';
import TodayTab from './tabs/TodayTab.jsx';
import CalendarTab from './tabs/CalendarTab.jsx';
import CountriesTab from './tabs/CountriesTab.jsx';
import TrackingTab from './tabs/TrackingTab.jsx';
import FavoritesBanner from './components/FavoritesBanner.jsx';
import TabBar from './components/TabBar.jsx';

const STORAGE_KEY = 'cdm2026_scores';
const FAVORITES_KEY = 'cdm2026_favorites';

function loadScores() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function mergeScores(base, stored) {
  return base.map(m => {
    const s = stored[m.id];
    if (!s) return m;
    return { ...m, score: s.score, status: s.status, source: s.source || 'manual', conflict: s.conflict || false };
  });
}

export default function App() {
  const [tab, setTab] = useState('today');
  const [matches, setMatches] = useState(() => mergeScores(ALL_MATCHES, loadScores()));
  const [favorites, setFavorites] = useState(loadFavorites);
  const [trackingTeam, setTrackingTeam] = useState(null);

  useEffect(() => {
    const stored = {};
    matches.forEach(m => {
      if (m.status === 'done' || m.conflict) {
        stored[m.id] = { score: m.score, status: m.status, source: m.source, conflict: m.conflict };
      }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [matches]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const syncScores = useCallback(async () => {
    if (document.visibilityState !== 'visible') return;
    try {
      const res = await fetch('https://worldcup26.ir/get/games');
      if (!res.ok) return;
      const apiData = await res.json();
      if (!Array.isArray(apiData)) return;
      setMatches(prev => prev.map(local => {
        const api = apiData.find(m => {
          const home = (m.home_team_en || m.home || '').toLowerCase();
          const away = (m.away_team_en || m.away || '').toLowerCase();
          const lh = local.home.toLowerCase();
          const la = local.away.toLowerCase();
          const dateMatch = (m.date || m.datetime || '').startsWith(local.date);
          return dateMatch &&
            (home.includes(lh.slice(0, 4)) || lh.includes(home.slice(0, 4))) &&
            (away.includes(la.slice(0, 4)) || la.includes(away.slice(0, 4)));
        });
        if (!api) return local;
        const apiScore = api.home_score != null && api.away_score != null
          ? [api.home_score, api.away_score] : null;
        if (apiScore == null) return local;
        if (local.status === 'done' && local.source === 'manual') {
          const same = local.score && local.score[0] === apiScore[0] && local.score[1] === apiScore[1];
          return same ? local : { ...local, conflict: true };
        }
        return { ...local, score: apiScore, status: 'done', source: 'api', conflict: false };
      }));
    } catch (e) {
      console.warn('Sync scores failed:', e);
    }
  }, []);

  const syncRef = useRef(null);
  useEffect(() => {
    syncScores();
    syncRef.current = setInterval(syncScores, 60000);
    const onVisible = () => { if (document.visibilityState === 'visible') syncScores(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearInterval(syncRef.current);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [syncScores]);

  const updateScore = useCallback((id, score, status) => {
    setMatches(prev => prev.map(m =>
      m.id === id ? { ...m, score, status, source: 'manual', conflict: false } : m
    ));
  }, []);

  const toggleFavorite = useCallback((team) => {
    setFavorites(prev =>
      prev.includes(team) ? prev.filter(t => t !== team) : [...prev, team]
    );
  }, []);

  const goToTeam = useCallback((team) => {
    setTrackingTeam(team);
    setTab('suivi');
  }, []);

  const ctx = { matches, favorites, trackingTeam, setTrackingTeam, updateScore, toggleFavorite, goToTeam, FLAGS, GROUP_COLORS };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100dvh',
      background: '#f5f2ec', fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: 480, margin: '0 auto', position: 'relative',
    }}>
      <header style={{ background: '#2d3f35', color: '#f5f2ec', padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: 0.3 }}>⚽ Coupe du Monde 2026</div>
        <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>USA · Canada · Mexique — Heures Paris (CEST)</div>
      </header>
      <FavoritesBanner favorites={favorites} goToTeam={goToTeam} FLAGS={FLAGS} />
      <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {tab === 'today'    && <TodayTab    {...ctx} />}
        {tab === 'calendar' && <CalendarTab {...ctx} />}
        {tab === 'pays'     && <CountriesTab {...ctx} />}
        {tab === 'suivi'    && <TrackingTab  {...ctx} />}
      </main>
      <TabBar tab={tab} setTab={setTab} />
    </div>
  );
}
