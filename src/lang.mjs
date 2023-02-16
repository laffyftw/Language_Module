import fetch from 'node-fetch';
import path from 'path';

let lang = 'en';
let translations = {};

export function setLang(newLang) {
  lang = newLang;
}

export async function t(key) {
  if (!translations[lang]) {
    // Fetch language file
    const response = await fetch(`file://${path.resolve(__dirname, '..', 'locales', lang + '.json')}`);
    translations[lang] = await response.json();
  }
  return translations[lang][key] || key;
}