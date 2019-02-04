const defaultState = {
    appName: 'Birthday App',
    modalMode: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "_toggleModal" : 
            console.log(`Toggling modal: ${action.modalMode}`)
            return {
                ...state,
                modalMode: action.modalMode
            }
        default:
            return state;    
    }
}