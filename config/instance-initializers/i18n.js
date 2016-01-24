export default {
  name: 'i18n',
  initialize: function({ container }) {
  	console.log('Initializing i18n');
  	console.log(calculateLocale());
    container.lookup('service:i18n').set('locale', calculateLocale());
  }
}

function calculateLocale() {
  // whatever you do to pick a locale for the user:
  return navigator.language || navigator.userLanguage || 'en-GB';
}