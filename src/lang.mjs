const DEFAULT_LANG = 'en'; // default language code
let lang = DEFAULT_LANG; // current language code

export function setLang(newLang) {
  lang = newLang;
}

export async function t(key) {
  // Load translation for current language
  const response = await fetch(`/jokelang/${lang}.json`);
  const translations = await response.json();

  console.log(translations);

  // Return translation for key
  return translations[key];
}