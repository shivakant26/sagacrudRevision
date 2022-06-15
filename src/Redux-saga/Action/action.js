import { ADD_DATA ,DELETE_DATA ,EDIT_DATA ,UPDATE_DATA } from "../ActionType";

export const addData = (data) => {
    return {
        type:ADD_DATA,
        payload:data
    }
}

export const deleteData = (id) => {
    
    return {
        type:DELETE_DATA,
        payload:id
    }
}

export const editData = (id) => {
    return {
        type:EDIT_DATA,
        payload:id
    }
}

export const updateData = (data,id) => {
    return {
        type:UPDATE_DATA,
        payload:data,
        id:id
    }
}