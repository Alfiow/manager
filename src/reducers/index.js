import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  // jika ada pesan signInWithEmailAndPassword failed: First argument "email" must be a valid string
  // auth dan AuthReducernya belum tersambung
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});