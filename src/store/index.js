import {createStore} from 'redux'

var store=createStore(function(state,action){
    switch(action.type){
        case 'changeName':return '王五'
        default:return '李四'
    }
})

console.log(store.getState())
store.dispatch({
    type:'changeName'
})

export default store