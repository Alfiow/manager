import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { props: 'name', value:'jane' }
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value
      return { ...state, [action.payload.prop]: action.payload.value }; // ini bukan array tetapi key interplation
      // action.payload ini adalah name dan phone yg ada di file EmployeeForm
    
    case  EMPLOYEE_CREATE:
      return INITIAL_STATE; // kembali ke awal form create employee kosong lagi
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};