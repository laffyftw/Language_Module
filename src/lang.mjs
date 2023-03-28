const DEFAULT_LANG = 'en'; // default language code
let lang = DEFAULT_LANG; // current language code

export function setLang(newLang) {
  lang = newLang;
}

export async function t(key) {
  // Get the file path from the server
  const responsePath = await fetch(`/jokelangpath/${lang}`);
  const filePath = await responsePath.json();

  // Load translation for current language using the obtained file path
  const response = await fetch(filePath.path);
  const translations = await response.json();

  console.log(translations);

  // Return translation for key
  return translations[key];
}
