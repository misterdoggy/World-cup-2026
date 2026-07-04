// All times in Paris (CEST = UTC+2). Dates are FIFA official dates.
// TV: "M6+beIN" = M6 en clair + beIN Sports | "beIN" = beIN Sports uniquement

export const GROUP_MATCHES = [
  // ── GROUPE A ──────────────────────────────────────────────────────────
  { id: 1,  date: '2026-06-11', time: '21:00', group: 'A', home: 'Mexique',        away: 'Afrique du Sud',    venue: 'Estadio Azteca',             city: 'Mexico City',      tv: 'M6+beIN' },
  { id: 2,  date: '2026-06-12', time: '03:00', group: 'A', home: 'Corée du Sud',   away: 'Tchéquie',          venue: 'Estadio Akron',              city: 'Guadalajara',      tv: 'beIN' },
  { id: 3,  date: '2026-06-18', time: '18:00', group: 'A', home: 'Tchéquie',       away: 'Afrique du Sud',    venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'beIN' },
  { id: 4,  date: '2026-06-18', time: '03:00', group: 'A', home: 'Mexique',        away: 'Corée du Sud',      venue: 'Estadio Akron',              city: 'Guadalajara',      tv: 'beIN' },
  { id: 5,  date: '2026-06-24', time: '03:00', group: 'A', home: 'Tchéquie',       away: 'Mexique',           venue: 'Estadio Azteca',             city: 'Mexico City',      tv: 'beIN' },
  { id: 6,  date: '2026-06-24', time: '03:00', group: 'A', home: 'Afrique du Sud', away: 'Corée du Sud',      venue: 'Estadio BBVA',               city: 'Monterrey',        tv: 'beIN' },

  // ── GROUPE B ──────────────────────────────────────────────────────────
  { id: 7,  date: '2026-06-12', time: '21:00', group: 'B', home: 'Canada',         away: 'Bosnie-Herzégovine',venue: 'BMO Field',                  city: 'Toronto',          tv: 'beIN' },
  { id: 8,  date: '2026-06-13', time: '21:00', group: 'B', home: 'Qatar',          away: 'Suisse',            venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'beIN' },
  { id: 9,  date: '2026-06-18', time: '21:00', group: 'B', home: 'Suisse',         away: 'Bosnie-Herzégovine',venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'beIN' },
  { id: 10, date: '2026-06-18', time: '00:00', group: 'B', home: 'Canada',         away: 'Qatar',             venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },
  { id: 11, date: '2026-06-24', time: '21:00', group: 'B', home: 'Suisse',         away: 'Canada',            venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },
  { id: 12, date: '2026-06-24', time: '21:00', group: 'B', home: 'Bosnie-Herzégovine', away: 'Qatar',         venue: 'Lumen Field',                city: 'Seattle',          tv: 'beIN' },

  // ── GROUPE C ──────────────────────────────────────────────────────────
  { id: 13, date: '2026-06-13', time: '00:00', group: 'C', home: 'Brésil',         away: 'Maroc',             venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
  { id: 14, date: '2026-06-13', time: '02:00', group: 'C', home: 'Haïti',          away: 'Écosse',            venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'beIN' },
  { id: 15, date: '2026-06-19', time: '00:00', group: 'C', home: 'Écosse',         away: 'Maroc',             venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'beIN' },
  { id: 16, date: '2026-06-19', time: '02:30', group: 'C', home: 'Brésil',         away: 'Haïti',             venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'beIN' },
  { id: 17, date: '2026-06-24', time: '00:00', group: 'C', home: 'Écosse',         away: 'Brésil',            venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'beIN' },
  { id: 18, date: '2026-06-24', time: '00:00', group: 'C', home: 'Maroc',          away: 'Haïti',             venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'beIN' },

  // ── GROUPE D ──────────────────────────────────────────────────────────
  { id: 19, date: '2026-06-12', time: '02:00', group: 'D', home: 'États-Unis',     away: 'Paraguay',          venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'M6+beIN' },
  { id: 20, date: '2026-06-13', time: '05:00', group: 'D', home: 'Australie',      away: 'Turquie',           venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },
  { id: 21, date: '2026-06-19', time: '21:00', group: 'D', home: 'États-Unis',     away: 'Australie',         venue: 'Lumen Field',                city: 'Seattle',          tv: 'M6+beIN' },
  { id: 22, date: '2026-06-19', time: '03:00', group: 'D', home: 'Turquie',        away: 'Paraguay',          venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'beIN' },
  { id: 23, date: '2026-06-25', time: '04:00', group: 'D', home: 'Turquie',        away: 'États-Unis',        venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'beIN' },
  { id: 24, date: '2026-06-25', time: '04:00', group: 'D', home: 'Paraguay',       away: 'Australie',         venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'beIN' },

  // ── GROUPE E ──────────────────────────────────────────────────────────
  { id: 25, date: '2026-06-14', time: '19:00', group: 'E', home: 'Allemagne',      away: 'Curaçao',           venue: 'NRG Stadium',                city: 'Houston',          tv: 'M6+beIN' },
  { id: 26, date: '2026-06-14', time: '01:00', group: 'E', home: "Côte d'Ivoire",  away: 'Équateur',          venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'beIN' },
  { id: 27, date: '2026-06-20', time: '22:00', group: 'E', home: 'Allemagne',      away: "Côte d'Ivoire",     venue: 'BMO Field',                  city: 'Toronto',          tv: 'M6+beIN' },
  { id: 28, date: '2026-06-20', time: '03:00', group: 'E', home: 'Équateur',       away: 'Curaçao',           venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'beIN' },
  { id: 29, date: '2026-06-25', time: '22:00', group: 'E', home: 'Curaçao',        away: "Côte d'Ivoire",     venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'beIN' },
  { id: 30, date: '2026-06-25', time: '22:00', group: 'E', home: 'Équateur',       away: 'Allemagne',         venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },

  // ── GROUPE F ──────────────────────────────────────────────────────────
  { id: 31, date: '2026-06-14', time: '22:00', group: 'F', home: 'Pays-Bas',       away: 'Japon',             venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },
  { id: 32, date: '2026-06-14', time: '03:00', group: 'F', home: 'Suède',          away: 'Tunisie',           venue: 'Estadio BBVA',               city: 'Monterrey',        tv: 'beIN' },
  { id: 33, date: '2026-06-20', time: '19:00', group: 'F', home: 'Pays-Bas',       away: 'Suède',             venue: 'NRG Stadium',                city: 'Houston',          tv: 'M6+beIN' },
  { id: 34, date: '2026-06-20', time: '06:00', group: 'F', home: 'Tunisie',        away: 'Japon',             venue: 'Estadio BBVA',               city: 'Monterrey',        tv: 'beIN' },
  { id: 35, date: '2026-06-25', time: '01:00', group: 'F', home: 'Japon',          away: 'Suède',             venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'beIN' },
  { id: 36, date: '2026-06-25', time: '01:00', group: 'F', home: 'Tunisie',        away: 'Pays-Bas',          venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'beIN' },

  // ── GROUPE G ──────────────────────────────────────────────────────────
  { id: 37, date: '2026-06-15', time: '21:00', group: 'G', home: 'Belgique',       away: 'Égypte',            venue: 'Lumen Field',                city: 'Seattle',          tv: 'beIN' },
  { id: 38, date: '2026-06-15', time: '02:00', group: 'G', home: 'Iran',           away: 'Nouvelle-Zélande',  venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'beIN' },
  { id: 39, date: '2026-06-21', time: '21:00', group: 'G', home: 'Belgique',       away: 'Iran',              venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'beIN' },
  { id: 40, date: '2026-06-21', time: '03:00', group: 'G', home: 'Nouvelle-Zélande', away: 'Égypte',          venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },
  { id: 41, date: '2026-06-26', time: '05:00', group: 'G', home: 'Égypte',         away: 'Iran',              venue: 'Lumen Field',                city: 'Seattle',          tv: 'beIN' },
  { id: 42, date: '2026-06-26', time: '05:00', group: 'G', home: 'Nouvelle-Zélande', away: 'Belgique',        venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },

  // ── GROUPE H ──────────────────────────────────────────────────────────
  { id: 43, date: '2026-06-15', time: '18:00', group: 'H', home: 'Espagne',        away: 'Cap-Vert',          venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'M6+beIN' },
  { id: 44, date: '2026-06-15', time: '00:00', group: 'H', home: 'Arabie Saoudite',away: 'Uruguay',           venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'beIN' },
  { id: 45, date: '2026-06-21', time: '18:00', group: 'H', home: 'Espagne',        away: 'Arabie Saoudite',   venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'M6+beIN' },
  { id: 46, date: '2026-06-21', time: '00:00', group: 'H', home: 'Uruguay',        away: 'Cap-Vert',          venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'beIN' },
  { id: 47, date: '2026-06-26', time: '02:00', group: 'H', home: 'Cap-Vert',       away: 'Arabie Saoudite',   venue: 'NRG Stadium',                city: 'Houston',          tv: 'beIN' },
  { id: 48, date: '2026-06-26', time: '02:00', group: 'H', home: 'Uruguay',        away: 'Espagne',           venue: 'Estadio Akron',              city: 'Guadalajara',      tv: 'M6+beIN' },

  // ── GROUPE I ──────────────────────────────────────────────────────────
  { id: 49, date: '2026-06-16', time: '21:00', group: 'I', home: 'France',         away: 'Sénégal',           venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
  { id: 50, date: '2026-06-16', time: '00:00', group: 'I', home: 'Irak',           away: 'Norvège',           venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'beIN' },
  { id: 51, date: '2026-06-22', time: '23:00', group: 'I', home: 'France',         away: 'Irak',              venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'M6+beIN' },
  { id: 52, date: '2026-06-22', time: '02:00', group: 'I', home: 'Norvège',        away: 'Sénégal',           venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'beIN' },
  { id: 53, date: '2026-06-26', time: '21:00', group: 'I', home: 'Norvège',        away: 'France',            venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'M6+beIN' },
  { id: 54, date: '2026-06-26', time: '21:00', group: 'I', home: 'Sénégal',        away: 'Irak',              venue: 'BMO Field',                  city: 'Toronto',          tv: 'beIN' },

  // ── GROUPE J ──────────────────────────────────────────────────────────
  { id: 55, date: '2026-06-16', time: '02:00', group: 'J', home: 'Argentine',      away: 'Algérie',           venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'M6+beIN' },
  { id: 56, date: '2026-06-16', time: '05:00', group: 'J', home: 'Autriche',       away: 'Jordanie',          venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'beIN' },
  { id: 57, date: '2026-06-22', time: '19:00', group: 'J', home: 'Argentine',      away: 'Autriche',          venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },
  { id: 58, date: '2026-06-22', time: '05:00', group: 'J', home: 'Jordanie',       away: 'Algérie',           venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'beIN' },
  { id: 59, date: '2026-06-27', time: '04:00', group: 'J', home: 'Algérie',        away: 'Autriche',          venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'beIN' },
  { id: 60, date: '2026-06-27', time: '04:00', group: 'J', home: 'Jordanie',       away: 'Argentine',         venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },

  // ── GROUPE K ──────────────────────────────────────────────────────────
  { id: 61, date: '2026-06-17', time: '19:00', group: 'K', home: 'Portugal',       away: 'RD Congo',          venue: 'NRG Stadium',                city: 'Houston',          tv: 'M6+beIN' },
  { id: 62, date: '2026-06-17', time: '03:00', group: 'K', home: 'Ouzbékistan',    away: 'Colombie',          venue: 'Estadio Azteca',             city: 'Mexico City',      tv: 'beIN' },
  { id: 63, date: '2026-06-23', time: '19:00', group: 'K', home: 'Portugal',       away: 'Ouzbékistan',       venue: 'NRG Stadium',                city: 'Houston',          tv: 'M6+beIN' },
  { id: 64, date: '2026-06-23', time: '04:00', group: 'K', home: 'Colombie',       away: 'RD Congo',          venue: 'Estadio Akron',              city: 'Guadalajara',      tv: 'beIN' },
  { id: 65, date: '2026-06-27', time: '01:30', group: 'K', home: 'Colombie',       away: 'Portugal',          venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'M6+beIN' },
  { id: 66, date: '2026-06-27', time: '01:30', group: 'K', home: 'RD Congo',       away: 'Ouzbékistan',       venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'beIN' },

  // ── GROUPE L ──────────────────────────────────────────────────────────
  { id: 67, date: '2026-06-17', time: '22:00', group: 'L', home: 'Angleterre',     away: 'Croatie',           venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },
  { id: 68, date: '2026-06-17', time: '01:00', group: 'L', home: 'Ghana',          away: 'Panama',            venue: 'BMO Field',                  city: 'Toronto',          tv: 'beIN' },
  { id: 69, date: '2026-06-23', time: '22:00', group: 'L', home: 'Angleterre',     away: 'Ghana',             venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'M6+beIN' },
  { id: 70, date: '2026-06-23', time: '01:00', group: 'L', home: 'Panama',         away: 'Croatie',           venue: 'BMO Field',                  city: 'Toronto',          tv: 'beIN' },
  { id: 71, date: '2026-06-27', time: '23:00', group: 'L', home: 'Panama',         away: 'Angleterre',        venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
  { id: 72, date: '2026-06-27', time: '23:00', group: 'L', home: 'Croatie',        away: 'Ghana',             venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'beIN' },
];

export const KO_MATCHES = [
  // ── SEIZIÈMES DE FINALE (Round of 32) ────────────────────────────────
  { id: 73,  date: '2026-06-28', time: '21:00', round: '16e de finale', home: 'Afrique du Sud',   away: 'Canada',             venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'beIN' },
  { id: 74,  date: '2026-06-29', time: '22:30', round: '16e de finale', home: 'Allemagne',         away: 'Paraguay',           venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'M6+beIN' },
  { id: 75,  date: '2026-06-30', time: '03:00', round: '16e de finale', home: 'Pays-Bas',          away: 'Maroc',              venue: 'Estadio BBVA',               city: 'Monterrey',        tv: 'M6+beIN' },
  { id: 76,  date: '2026-06-29', time: '19:00', round: '16e de finale', home: 'Brésil',            away: 'Japon',              venue: 'NRG Stadium',                city: 'Houston',          tv: 'M6+beIN' },
  { id: 77,  date: '2026-06-30', time: '23:00', round: '16e de finale', home: 'France',            away: 'Suède',              venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
  { id: 78,  date: '2026-06-30', time: '19:00', round: '16e de finale', home: "Côte d'Ivoire",     away: 'Norvège',            venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'beIN' },
  { id: 79,  date: '2026-07-01', time: '03:00', round: '16e de finale', home: 'Mexique',           away: 'Équateur',           venue: 'Estadio Azteca',             city: 'Mexico City',      tv: 'beIN' },
  { id: 80,  date: '2026-07-01', time: '18:00', round: '16e de finale', home: 'Angleterre',        away: 'RD Congo',           venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'beIN' },
  { id: 81,  date: '2026-07-02', time: '02:00', round: '16e de finale', home: 'États-Unis',        away: 'Bosnie-Herzégovine', venue: "Levi's Stadium",             city: 'Santa Clara',      tv: 'M6+beIN' },
  { id: 82,  date: '2026-07-01', time: '22:00', round: '16e de finale', home: 'Belgique',          away: 'Sénégal',            venue: 'Lumen Field',                city: 'Seattle',          tv: 'M6+beIN' },
  { id: 83,  date: '2026-07-03', time: '01:00', round: '16e de finale', home: 'Portugal',          away: 'Croatie',            venue: 'BMO Field',                  city: 'Toronto',          tv: 'M6+beIN' },
  { id: 84,  date: '2026-07-02', time: '21:00', round: '16e de finale', home: 'Espagne',           away: 'Autriche',           venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'M6+beIN' },
  { id: 85,  date: '2026-07-03', time: '05:00', round: '16e de finale', home: 'Suisse',            away: 'Algérie',            venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },
  { id: 86,  date: '2026-07-04', time: '00:00', round: '16e de finale', home: 'Argentine',         away: 'Cap-Vert',           venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'M6+beIN' },
  { id: 87,  date: '2026-07-04', time: '03:30', round: '16e de finale', home: 'Colombie',          away: 'Ghana',              venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'beIN' },
  { id: 88,  date: '2026-07-03', time: '20:00', round: '16e de finale', home: 'Australie',         away: 'Égypte',             venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'beIN' },

  // ── HUITIÈMES DE FINALE (Round of 16) ────────────────────────────────
  { id: 89,  date: '2026-07-04', time: '23:00', round: '8e de finale', home: 'Paraguay',  away: 'France',             venue: 'Lincoln Financial Field',    city: 'Philadelphia',     tv: 'M6+beIN' },
  { id: 90,  date: '2026-07-04', time: '19:00', round: '8e de finale', home: 'Canada',    away: 'Maroc',              venue: 'NRG Stadium',                city: 'Houston',          tv: 'beIN' },
  { id: 91,  date: '2026-07-05', time: '22:00', round: '8e de finale', home: 'Brésil',    away: 'Norvège',            venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
  { id: 92,  date: '2026-07-05', time: '02:00', round: '8e de finale', home: 'Mexique',    away: 'Angleterre',         venue: 'Estadio Azteca',             city: 'Mexico City',      tv: 'beIN' },
  { id: 93,  date: '2026-07-06', time: '21:00', round: '8e de finale', home: 'Portugal',   away: 'Espagne',            venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },
  { id: 94,  date: '2026-07-06', time: '02:00', round: '8e de finale', home: 'États-Unis', away: 'Belgique',           venue: 'Lumen Field',                city: 'Seattle',          tv: 'M6+beIN' },
  { id: 95,  date: '2026-07-07', time: '18:00', round: '8e de finale', home: 'Argentine',  away: 'Égypte',             venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'M6+beIN' },
  { id: 96,  date: '2026-07-07', time: '22:00', round: '8e de finale', home: 'Suisse',     away: 'Colombie',           venue: 'BC Place',                   city: 'Vancouver',        tv: 'beIN' },

  // ── QUARTS DE FINALE ─────────────────────────────────────────────────
  { id: 97,  date: '2026-07-09', time: '22:00', round: 'Quart de finale', home: 'France',    away: 'Maroc',         venue: 'Gillette Stadium',           city: 'Foxborough',       tv: 'M6+beIN' },
  { id: 98,  date: '2026-07-10', time: '21:00', round: 'Quart de finale', home: 'V93',       away: 'V94',           venue: 'SoFi Stadium',               city: 'Los Angeles',      tv: 'M6+beIN' },
  { id: 99,  date: '2026-07-11', time: '23:00', round: 'Quart de finale', home: 'Brésil',    away: 'Mexique',       venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'M6+beIN' },
  { id: 100, date: '2026-07-11', time: '03:00', round: 'Quart de finale', home: 'V95',       away: 'V96',           venue: 'Arrowhead Stadium',          city: 'Kansas City',      tv: 'M6+beIN' },

  // ── DEMI-FINALES ──────────────────────────────────────────────────────
  { id: 101, date: '2026-07-14', time: '21:00', round: 'Demi-finale', home: 'V97',  away: 'V98',              venue: 'AT&T Stadium',               city: 'Arlington',        tv: 'M6+beIN' },
  { id: 102, date: '2026-07-15', time: '21:00', round: 'Demi-finale', home: 'V99',  away: 'V100',             venue: 'Mercedes-Benz Stadium',      city: 'Atlanta',          tv: 'M6+beIN' },

  // ── PETITE FINALE ─────────────────────────────────────────────────────
  { id: 103, date: '2026-07-18', time: '23:00', round: 'Petite finale', home: 'P101', away: 'P102',           venue: 'Hard Rock Stadium',          city: 'Miami Gardens',    tv: 'M6+beIN' },

  // ── FINALE ────────────────────────────────────────────────────────────
  { id: 104, date: '2026-07-19', time: '21:00', round: 'Finale',       home: 'V101', away: 'V102',            venue: 'MetLife Stadium',            city: 'East Rutherford',  tv: 'M6+beIN' },
];

export const ALL_MATCHES = [...GROUP_MATCHES, ...KO_MATCHES].map(m => ({
  ...m,
  status: 'upcoming',
  score: null,
  source: null,
  conflict: false,
}));
