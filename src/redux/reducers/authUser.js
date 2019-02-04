const initialState = {
    user: {},
    isAuth: false,
    profile: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "_setUser":
            return {
                ...state,
                isAuth: Object.keys(action.user).length > 0 ? true : false,
                user: action.user
            }
        case "_followUser" : 
            let user = Object.assign({}, state.user)
            user.following.push(action.userId)
            return {
                ...state,
                user: user
            }
        case "_setProfile" :
            return {
                ...state,
                profile: action.profile
            }        
        default:
            return state;
    }
}