import {Groups} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('groups.list', function () {
    return Groups.find();
  });
}
