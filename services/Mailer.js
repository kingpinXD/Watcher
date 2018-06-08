const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.mail {
  constructor({ subject, recepients }, content) {
    super();
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("noreply@watcher.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recepients = recepients;

    this.addContent(this.body);
    const personalize = new helper.Pesonalization();
    personalize.addTo(recepients);
    this.addPersonalization(personalize);
  }
  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "v3/mail/send",
      body: this.toJSON()
    });
    const response = this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
