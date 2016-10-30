import Meteor from 'meteor/meteor';
import React from "react";

export const App = ({children}) => {
  return (
  <div className="App">
    <h1>App</h1>
    { children }
  </div>
  )
}
