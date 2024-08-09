const setIdAction = () => {
    return {type : "setid"};
}

const setuserNameAction = (text) => {
    return { type : 'setusername'  , payload : text}
}

const setUserToken = (text) => {
    return {type : 'setusertoken', payload : text}
}

const setisUserLoggedIn = (text) => {
    return {type : 'setisloggedIn' , payload : text}
}

export {setIdAction , setuserNameAction , setUserToken , setisUserLoggedIn}
