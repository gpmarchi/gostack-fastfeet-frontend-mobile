import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/deliverymen/${id}`);

    const { deliveryman } = response.data;

    yield put(signInSuccess(deliveryman));

    // history.push('/parcels');
  } catch (error) {
    yield put(signInFailure());

    Alert.alert(
      'Erro no login',
      'Falha na autenticação, verifique seus dados.'
    );
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
