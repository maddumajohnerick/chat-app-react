import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RegisterUser from '../components/register_user.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();

  const error = LocalState.get('CREATE_USER_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  register: actions.users.register,
  clearErrors: actions.users.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RegisterUser);
