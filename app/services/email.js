import Ember from 'ember';

export default Ember.Service.extend({

    init() {
        this._super(...arguments);
    },

    sendEmail(to, subject, body) {
    	
        Ember.$.post("api/email", {
            to: to,
            subject: subject,
            body: body
        });
    }
});
