import { language } from './store';

const translations = {
  en: {
    empty: "Empty",
    stuck: "Stuck",
    ok: "OK",
    'SensorGrid.title': 'Seeding control'
  },
  es: {
    empty: "Vacío",
    stuck: "Atascado",
    ok: "OK",
    'SensorGrid.title': 'Control de siembra'
  },
  // Add other languages as needed...
};

export default function t(key) {
  return translations[language.lang][key] || key;
}
