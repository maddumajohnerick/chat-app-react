import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import RegisterUser from '/client/modules/users/containers/register_user.js';
import LoginUser from '/client/modules/users/containers/login_user.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/users/register', {
    name: 'users.register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<RegisterUser />)
      });
    }
  });

  FlowRouter.route('/users/login', {
    name: 'users.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<LoginUser />)
      });
    }
  });

  FlowRouter.route("/logout", {
    name: "users.logout",
    action() {
      Meteor.logout();
      FlowRouter.go("/");
    }
  });

}
