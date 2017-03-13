import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('messages.list', function (receiver) {
    return Messages.find(
      {
        $or: [
          {$and:[{receiver: receiver},{sender: this.userId}]}, {$and:[{receiver: this.userId},{sender: receiver}]},
        ],
      }
    );
  });

  Meteor.publish('groupmessages.list', function (receiver) {
    return Messages.find({receiver: receiver});
  });
}
