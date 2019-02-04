import axios from "axios";

const url = process.env.NODE_ENV === "production" ? "/api/" : "http://localhost:5000/api/";

export function _loadBirthdays () {
    return (dispatch) => {
        axios.get(`${url}birthdays`)
        .then((res) => {
            let birthdays = res.data
            dispatch({type: "_loadBirthdays", birthdays})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getUser (_id) {
    return axios.get(`${url}user/${_id}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export function getUserProfile (_id) {
    return (dispatch) => {
        axios.get(`${url}user/profile/${_id}`)
        .then((res) => {
            let profile = res.data
            dispatch({type: "_setProfile", profile})
        })
        .catch((err) => {
            console.log(err)
        })        
    }
}

export function getBirthday (birthdayId) {
    return (dispatch) => {
        axios.get(`${url}birthday/${birthdayId}`)
        .then((res) => {
            let birthday = res.data
            dispatch({type: "_viewBirthday", birthday})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function comment () {
    return (dispatch) => {

    }
}

export function clap (birthdayId) {
    return (dispatch) => {
        axios.post(`${url}birthday/clap`, {birthdayId})
        .then((res) => {
            dispatch({type: "_clapBirthday"})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function follow (id, userId) {
    return (dispatch) => {
        axios.get(`${url}user/follow`, {id, userId})
        .then((res) => {
            dispatch({type: "_followUser", userId})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function signInUser (userData) {
    return (dispatch) => {
        axios.get(`${url}user`, userData)
        .then((res) => {
            let user = res.data
            localStorage.setItem('AUTH', JSON.stringify(user))
            dispatch({type: "_setUser", user})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function toggleClose() {
    return (dispatch) => {
        dispatch({type: '_toggleModal', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: '_toggleModal', modalMode: true})        
    }    
}
