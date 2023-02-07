import i18next from 'i18next';

i18next.init({
  lng: document.querySelector('html').lang,
  resources: {
    en: {
      translation: {
        key1: 'Hello World!',
        key2: 'Goodbye World!',
        language: 'Language: English'
      }
    },
    fr: {
      translation: {
        key1: 'Bonjour le monde!',
        key2: 'Au revoir le monde!',
        language: 'Langue: Français'
      }
    }
  }
});

const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
  updateContent();
};

const updateContent = () => {
  document.getElementById("key1").innerHTML = i18next.t('key1');
  document.getElementById("key2").innerHTML = i18next.t('key2');
  document.getElementById("language").innerHTML = i18next.t('language');
};

updateContent();

window.changeLanguage = changeLanguage;