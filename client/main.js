import {createApp} from 'mantra-core';
import initContext from './configs/context';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import messagesModule from './modules/messages';
import groupsModule from './modules/groups';

// init context
const context = initContext();


var title = "ChatLet";
var stylesetting = {rel: "stylesheet",type:"text/css", href: "css/style.css"};
var linkInfo = {rel: "stylesheet", href: "http://fonts.googleapis.com/icon?family=Material+Icons"};
var metaInfo = {name: "viewport", content: "width=device-width, initial-scale=1.0"};
DocHead.setTitle(title);
DocHead.addLink(stylesetting);
DocHead.addLink(linkInfo);
DocHead.addMeta(metaInfo);


// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(messagesModule);
app.loadModule(groupsModule);
injectTapEventPlugin();
app.init();
