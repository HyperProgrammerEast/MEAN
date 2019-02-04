const initialState = {
    birthdays: [],
    birthday: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "_loadBirthdays" :
            return {
                ...state,
                birthdays: action.birthdays
            };
        case "_viewBirthday" :
            return {
                ...state,
                birthday: action.birthday
            };
        case "_clapBirthday" :
            let birthday = Object.assign({}, state.birthday);
            birthday.claps++;
            console.log(birthday);
            return {
                ...state,
                birthday: birthday
            }        
        default: 
            return state;
    }
}