import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Action, createStore} from 'redux';

// prettier-ignore
export type User = {
  name: string, email: string, password: string
}

// prettier-ignore
export type AppState = {
  loggedIn: boolean, loggedUser: User
}

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {name: '', email: '', password: ''},
};

const rootReducer = (state: AppState = initialState, action: Action) => state;
const store = make;

export default function App() {
  return <ReduxProvider store={store}></ReduxProvider>;
}
