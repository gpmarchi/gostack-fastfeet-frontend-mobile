import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/deliverymen/${id}`);

    const deliveryman = response.data;

    yield put(signInSuccess(deliveryman));
  } catch (error) {
    yield put(signInFailure());

    Alert.alert(
      'Erro no login',
      'Falha na autenticação, verifique seus dados.'
    );
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
