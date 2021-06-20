import {AppState} from './AppState';
import type {LoginActions} from './actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {name: '', email: '', password: ''},
};

// prettier-ignore
export const rootReducer = 
    (state: AppState = initialState, action:LoginActions) => {
    switch (action.type){
        //...state는 AppState에 새로운 멤버를 추가할 것을 대비
        case 'login': return {...state, loggedIn:true, loggedUser:action.loggedUser}
        case 'logout': return initialState
    }
    return state
}
