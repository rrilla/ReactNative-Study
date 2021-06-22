import type {Action} from 'redux';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type State = {
  loggedIn: boolean;
  loggedUser: User;
};

export type LogoutAction = Action<'logout'>;

export type LoginAction = Action<'login'> & {
  loggedUser: User;
  //type: 'login'   //Action<'login'>생략하고 요래도 가능
};

export type Actions = LogoutAction | LoginAction;
