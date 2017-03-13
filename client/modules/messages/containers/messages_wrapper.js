import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MessagesWrapper from '../components/messages_wrapper.jsx';

export const composer = ({context, userId, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const error = LocalState.get('CREATE_USER_ERROR');
  // onData(null, {error});
  if(Meteor.subscribe("users.list").ready()){
    if(Meteor.users.find({_id: userId}).count() && Meteor.subscribe("messages.list", userId).ready()){
      // if(Meteor.subscribe("messages.list", userId).ready()){
        const messages = Collections.Messages.find(
          {
            $or: [
              {$and:[{receiver: userId},{sender: Meteor.userId()}]}, {$and:[{receiver: Meteor.userId()},{sender: userId}]},
            ],
          }
        ).fetch();
        const useremail = Meteor.users.find({_id: userId}).fetch();
        onData(null, {useremail, messages, error});
      // }
    }
    else{
      if(Meteor.subscribe("groups.list").ready() && Meteor.subscribe("groupmessages.list", userId).ready()){
        // if(Meteor.subscribe("groupmessages.list", userId).ready()){
          const messages = Collections.Messages.find({receiver: userId}).fetch();
          const groupInfo = Collections.Groups.find({_id: userId}).fetch();
          const useremail = ""
          onData(null, {useremail, groupInfo, messages, error});
        // }
      }
    }
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  sendMessage: actions.messages.sendMessage,
  clearErrors: actions.messages.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MessagesWrapper);
