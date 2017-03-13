import {Groups} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'groups.add'(groupname) {
      check(groupname, String);
      Groups.insert({name: groupname});
    },
  });
}
