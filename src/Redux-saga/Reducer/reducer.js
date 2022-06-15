import { ADD_DATA_SUCCUSS ,DELETE_DATA_SUCCUSS, EDIT_DATA_SUCCUSS,UPDATE_DATA_SUCCESS } from "../ActionType";

const initialstate = {
    data:[
        {title:"html",discription:"tutorial"}
    ]
}


const reducer = (state=initialstate , action) =>{
    switch(action.type){
        case ADD_DATA_SUCCUSS:
            const add_list = state.data;
            add_list.push(action.payload)
            return{
                ...state,
                isEdit:null,
                data:[...add_list]
            }

            case DELETE_DATA_SUCCUSS:
            const delete_list = state.data;
            delete_list.splice(action.payload,1)
            return{
                ...state,
                data:[...delete_list]
            }

            case EDIT_DATA_SUCCUSS:
                const edit_list = state.data;
                var id = action.payload;
                var object = edit_list[id]
                return{
                    ...state,
                    isEdit:object,
                    id:id
                }
                case UPDATE_DATA_SUCCESS :
                    const update_list = state.data;
                    update_list.splice(action.id,1,{
                        title:action.payload.title,
                        discription:action.payload.discription
                    })
                    return{
                        ...state,
                        isEdit:null,
                        data:[...update_list]
                    }
            default:
                return state
    }
}

export default reducer;