export default {
  register({Meteor, LocalState, FlowRouter}, username, password) {
    if (!username) {
      return LocalState.set('CREATE_USER_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('CREATE_USER_ERROR', 'Password is required.');
    }
    LocalState.set('CREATE_USER_ERROR', null);

    Accounts.createUser({username, password});
    FlowRouter.go('/');
  },

  login({Meteor, LocalState, FlowRouter}, username, password) {
    if (!username) {
      return LocalState.set('LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('LOGIN_ERROR', 'Password is required.');
    }
    LocalState.set('LOGIN_ERROR', null);
    Meteor.loginWithPassword(username, password);
    FlowRouter.go('/');
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  },
}
