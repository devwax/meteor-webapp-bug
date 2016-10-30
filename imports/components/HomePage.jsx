import Meteor from 'meteor/meteor';
import React from 'react';

export const HomePage = ({ children }) =>
  <div className="HomePage">
    <h2>Home Page</h2>
    <p>(Open browser console for messages)</p>
    { children }
  </div>
