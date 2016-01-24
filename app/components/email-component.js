import Ember from 'ember';

export default Ember.Component.extend({


    languages: [{
    	id:'en',
        name: 'United States',
        flagUrl: '/flags/us.svg'
    }, {
    	id:'es',
        name: 'Spain',
        flagUrl: '/flags/es.svg'
    }, {
    	id:'pt',
        name: 'Portugal',
        flagUrl: '/flags/pt.svg'
    }, {
    	id:'ru',
        name: 'Russia',
        flagUrl: '/flags/ru.svg'
    }, ],
    emailService: Ember.inject.service('email'),
    i18n: Ember.inject.service(),
    actions: {

        sendEmail() {
            console.log(this.get('emailService'));
            this.get('emailService').sendEmail(this.get('emailTo'), this.get('subject'), this.get('emailBody'));
        },
        changeLanguage(language) {

        	console.log('Changing language to ' + language.id);

        	this.set('i18n.locale', language.id);

        }
    }

});
