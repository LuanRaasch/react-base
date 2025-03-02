import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

// eslint-disable-next-line no-unused-vars
const requisicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
    toast.success('Successo');
  } catch (error) {
    toast.error('Deu erro');
    yield put(actions.clicaBotaoFailure());
  };
};

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
]);
