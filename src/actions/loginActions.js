// ACTION CONSTANTS

export const FETCH_LOADING = "FETCH_LOADING"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILED = "REGISTER_FAILED"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILED = "LOGOUT_FAILED"


// ACTIONS

export const onLogin = (user) => {
    return dispatch => {
        let request = {
            method: "POST",
            mode: "cors",   // Oltava, jos eri koneella!
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }
        dispatch(fetchLoading());
        return fetch("/login", request).then(response => {
            console.log("login fetch: response.ok=" + response.ok)
            if (response.ok) {
                response.json().then(data => {
                    alert("Login " + user + " success")
                    dispatch(loginSuccess(data.token));
                }).catch(error => {
                    dispatch(loginFailed("Error parsing JSON"));
                })
            } else {
                dispatch(loginFailed("Server responded with status: " 
                                     + response.statusText));
            }
        }).catch(error => {
            dispatch(loginFailed(error));
        })
    }
}

export const onRegister = (user) => {
    return dispatch => {
        let request = {
            method: "POST",
            mode: "cors",   // Oltava, jos eri koneella!
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }
        dispatch(fetchLoading())
        return fetch("/register", request).then(response => {
            if (response.ok) {
                alert("Register as '" + user.username + "' succeeded")
                dispatch(registerSuccess())
            } else {   
                alert("Register as '" + user.username + "' failed")
                dispatch(registerFailed("Server responded with status: "
                + response.statusText));  
            }
        }).catch(error => {
            dispatch(registerFailed(error))
        })
    }
}

export const onLogout = (token) => {
    return dispatch => {
        let request = {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json",
                      "token": token},
        }
        dispatch(fetchLoading())
        return fetch("/logout", request).then(response => {
            dispatch(logoutSuccess())
        }).catch(error => {
            dispatch(logoutFailed(error))
            console.log(error)
        })
    }
}


// ACTION CREATORS

const fetchLoading = () => {
    return {
        type: FETCH_LOADING,
    }
}

const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        token: token,
    }
}

const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        error: error,
    }
}

const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    }
}

const registerFailed = (error) => {
    return {
        type: REGISTER_FAILED,
        error: error,
    }
}

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    }
}

const logoutFailed = (error) => {
    return {
        type: LOGOUT_FAILED,
        error: error,
    }
}
