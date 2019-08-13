
/**
 *  happyReducer
 * state = {
 *  theHappening: String
 *      key to selected happening
 *  isLogged: Boolean
 *      is user logged in or anonymous
 *  task: String
 *      alternatives:
 *      "NONE": No Happening selectd, no task selected
 *      "USER_REGISTRATION": Some Happening selected, no task selected
 *      "ADMIN"
 *      "OWNER"
 *      "GROUPLEADER"
 * }
 */

const initialize = {
    theHappening: "",
    isLogged: false,
    task: "NONE",
}

const happyReducer = (state=initialize, action) => {
    console.log("happyReducer:\n -state=\n"
        + JSON.stringify(state)
        + "\n -action=\n"
        + JSON.stringify(action)
    )

    let tempState = {}
    let tempTask = ""

    switch (action.type) {
        case "SAVE_USERREGISTRATION_DATA":
            console.log("\n\n")
            console.log("USER REGISTRATION DATA:")
            console.log("=======================")
            console.log("\nstate="+JSON.stringify(state))
            console.log("\naction="+JSON.stringify(action))
            tempState = {...state}
            break
        case "HAPPENING_SELECTED":
            if (action.theHappening === "") {
                tempTask = "NONE"
            } else {
                tempTask = "USERREGISTRATION"
            }
            tempState = {
                ...state,
                theHappening: action.theHappening,
                task: tempTask,
            }
            break
            // return tempState
        case "LOGINOUT":
            action.isLogged = !state.isLogged
            tempState = {
                ...state,
                isLogged: action.isLogged,
            }
            break
            // return tempState
        default:
            tempState = {...state}
            break
            // return state
    }
    
    return tempState
}

export default happyReducer;
