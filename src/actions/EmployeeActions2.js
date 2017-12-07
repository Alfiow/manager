import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  //console.log(name, phone, shift);
  //firebase.database().ref('users/userId/employees')
  const { currentUser } = firebase.auth();

  return(dispatch) => { // tambah dispatch untuk kirim data ke employeCreate dalam promise .then
    firebase.database().ref(`users/${currentUser.uid}/employees`)
    // "/users/123456/employees", itu akhir dari string yang dibuat di atas
    // tanda `` petik terbalik adalah template string atau string interplation
    // yang merupakan fitur es6
      .push({ name, phone, shift }) // untuk add data ke folder ref di atas
      //.then(() => Actions.employeeList());
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' }); // untuk reset dan navigasi ke employeeList lagi
      });
  };// tambahkan fungsi return untuk menggunakan redux-thunk
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return(dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
      .on('value', snapshot => { // setiap data yg ada di ref, akan diambil oleh snapshot
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });// snapshot itu bukan data melainkan objek yg bisa digunakan untuk mengambil data dengan snapshot.val()
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`) // ${uid} untuk menentukan secara spesifik file yg akan di save
      .set({ name, phone, shift }) 
      // .then(() => console.log('saved!!')); // untuk melihat savenya berhasil apa tidak
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
        Actions.employeeList({ type: 'reset' }); // untuk reset dan navigasi ke employeeList lagi
        // tetapi ketika klik tombol add maka employee tidak kereset
        // maka harus ditambah dispatch
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};