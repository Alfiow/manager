
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      // return { ...state, email: action.payload }; // immutable state seperti biasa
      return { ...state, [action.payload.prop]: action.payload.text }; // kalo ini
      // lihat prop dan text pada file AuthActions const nya si emailChanged
      // lalu lihat di login form bagian input email
      // yg ada onChangeTextnya di situ ada prop dan text
      // loginForm || AuthActions || AuthReducers || berhubungan || indexnya reducer juga
      // cuma ini tak muncul di console log
      // lihat perbedaanya di EmployeeActions

      //state.email= action.payload;
      //return state;
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
