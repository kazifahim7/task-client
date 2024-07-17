import { createContext, useState } from "react";

export const Authcontext=createContext()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)



    const info={
        user,
        setUser
    }

    console.log(user)



    return (
        <Authcontext.Provider value={info}>
            {
                children
            }

        </Authcontext.Provider>
    );
};

export default AuthProvider;