import { ADD_DATA ,
     ADD_DATA_SUCCUSS ,
      DELETE_DATA,
      DELETE_DATA_SUCCUSS,
      EDIT_DATA,
      EDIT_DATA_SUCCUSS,
      UPDATE_DATA,
      UPDATE_DATA_SUCCESS
    } from "../ActionType";

import { call , put , takeEvery } from 'redux-saga/effects';

function* addDataSaga(action){
    yield put ({
        type:ADD_DATA_SUCCUSS,
        payload:action.payload
    })
}
function* deleteDataSaga(action){
    console.log("id",action)
    yield put ({
        type:DELETE_DATA_SUCCUSS,
        payload:action.payload
    })
}

function* editDataSaga(action){
    yield put({
        type:EDIT_DATA_SUCCUSS,
        payload:action.payload
    })
}

function* updateDataSaga(action , id){
    yield put({
        type:UPDATE_DATA_SUCCESS,
        payload:action.payload,
        id:action.id
    })
}

export default function* rootsaga(){
    yield takeEvery(ADD_DATA,addDataSaga)
    yield takeEvery(DELETE_DATA,deleteDataSaga)
    yield takeEvery(EDIT_DATA,editDataSaga)
    yield takeEvery(UPDATE_DATA,updateDataSaga)
}