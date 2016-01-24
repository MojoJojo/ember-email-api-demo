import Ember from 'ember';

export default Ember.Component.extend({
	emailService: Ember.inject.service('email'),
	actions: {

        sendEmail() {
            console.log(this.get('emailService'));
            this.get('emailService').sendEmail(this.get('emailTo'), this.get('subject'), this.get('emailBody'));
        }
    }

});
