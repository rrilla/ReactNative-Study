import {AppState} from './AppState';
import type {LoginActions} from './actions';
import {combineReducers} from 'redux';

// 리듀서 분할 구현 전
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

// 리듀서 분할 구현 후
// prettier-ignore
// const loggedInReducer = (state = false, action: LoginActions) => {
//   switch (action.type) {
//     case 'login': return true;
//     case 'logout': return false;
//   }
//   return state;
// };

// const initialState = {name: '', email: '', password: ''};
// // prettier-ignore
// const loggedUserReducer = (state = initialState, action: LoginActions) => {
//   switch (action.type) {
//     case 'login': return {...state, ...action.loggedUser};
//     case 'logout': return initialState;
//   }
//   return state;
// };

// export const reducer = combineReducers({
//   loggedIn: loggedInReducer, //boolean 타입 상태를 처리하는 리듀서
//   loggedUser: loggedUserReducer, //User 타입 상태를 처리하는 리듀서
// });
