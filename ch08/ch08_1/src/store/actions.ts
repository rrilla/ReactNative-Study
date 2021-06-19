import type {Action} from 'redux';
import type {User} from './index';

type LogoutAction = Action<'logout'>;
type LoginAction = Action<'login'> & {
  loggedUser: User;
};

export type LoginActions = LogoutAction | LoginAction;

export const LoginAction = (loggedUser: User): LoginAction => ({
  type: 'login',
  loggedUser,
});

export const LogoutAction = (): LogoutAction => ({
  type: 'logout',
});
