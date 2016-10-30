import Meteor from 'meteor/meteor';
import React from 'react';

export const NotFound = ({ children }) =>
  <div className="NotFound">
    <h2>404 - File Not Found</h2>
    { children }
  </div>
