const authReducer = (state = null, action) => {
    switch(action.type){
        case 'AUTH':
            return action.data;
        default:
            return state;
    }
}

export default authReducer;