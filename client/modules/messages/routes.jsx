import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import MessagesWrapper from '/client/modules/messages/containers/messages_wrapper.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route("/messages/:userId", {
    name: "messages",
    action({userId}) {
      mount(MainLayoutCtx, {
        content: () => (<MessagesWrapper userId={userId} />)
      });
    }
  });
}
