import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const DEFAULT_LANG = 'en'; // default language code
let lang = DEFAULT_LANG; // current language code

export function setLang(newLang) {
  lang = newLang;
}

export async function t(key) {
  // Load translation for current language
  const response = await fetch(`file://${path.resolve(fileURLToPath(new URL(import.meta.url)), '..', 'locales', lang + '.json')}`);
  const translations = await response.json();

  console.log(translations);

  // Return translation for key
  return translations[key];
}