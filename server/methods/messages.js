import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'messages.send'(message, receiver) {
      check(message, String);
      const createdAt = new Date();
      const sender = Meteor.userId();
      const senderName = Meteor.user().username;
      const thisMessage = {message, receiver, sender, senderName, createdAt};
      Messages.insert(thisMessage);
    },
  });
}
