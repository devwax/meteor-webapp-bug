import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import { App } from '/imports/components/App.jsx';
import { HomePage } from '/imports/components/HomePage.jsx';
import { NotFound } from '/imports/components/NotFound.jsx';

Meteor.startup(() => {
  const routes = (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="*" component={NotFound} />
    </Route>
  );

  ReactRouterSSR.Run(routes, {
    rehydrateHook(data) {
      console.log('rehydrateHook:', data);
      return data;
    }
  }, {
    dehydrateHook() {
      const data = { testprop: "this is a test" };
      console.log("dehydrateHook:", data);
      return data;
    }
  });
});
