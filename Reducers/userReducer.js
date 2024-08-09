const userinitialState = {
    user: null,
    username : '',
    token: '',
    isloggedIn : false 
}

const userReducer = (state = userinitialState, action) => {
    switch (action.type) {
        case 'setid':
            return {
                ...state,
                uid:  action.userId 
            }
            break;
        case 'setusername':
            return {
                ...state , username : action.userName
            }
            break;
        case 'setusertoken':
            return{
                ...state , token : action.token
            }
            break;
        case 'setisloggedIn' : 
            return {
                ...state , isloggedIn : true , 
            }
            break ;
        default:
            return {
                // ...initialState
                ...state 
            }
            break;
    }
}

// userReducer({ type: "setid" })
// userReducer({ type: "setusername" })
// userReducer({ type: "setuserdata" })
// userReducer({ type: "setisuserlogin" , loggedIn : true })

export default userReducer ; 