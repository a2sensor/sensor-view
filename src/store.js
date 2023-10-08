// src/store.js
import { createStore } from 'solid-js/store';

export const [language, setLanguage] = createStore({
  lang: 'es' // default language
});
