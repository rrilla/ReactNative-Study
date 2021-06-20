import type {Action} from 'redux';
import type {User} from './index';

type LogoutAction = Action<'logout'>;
type LoginAction = Action<'login'> & {
  loggedUser: User;
  //type: 'login'   //Action<'login'>생략하고 요래도 가능
};

export type LoginActions = LogoutAction | LoginAction;

export const LoginAction = (loggedUser: User): LoginAction => ({
  type: 'login',
  loggedUser,
});

export const LogoutAction = (): LogoutAction => ({
  type: 'logout',
});
