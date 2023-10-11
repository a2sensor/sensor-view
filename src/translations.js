import { language } from './store';

const translations = {
  en: {
    empty: "Empty",
    stuck: "Stuck",
    ok: "OK",
    unknown: 'Disconnected',
    'home.title': 'Seeding'
  },
  es: {
    empty: "Vacío",
    stuck: "Atascado",
    ok: "OK",
    unknown: "Desconectado",
    'home.title': 'Siembra'
  },
  // Add other languages as needed...
};

export default function t(key) {
  return translations[language.lang][key] || key;
}
