
import AuthContext from "../context/AuthContext/AuthContext"
import {use} from 'react'

const useAuth = () =>{
    const context = use(AuthContext);
    return context;
}

export default useAuth;