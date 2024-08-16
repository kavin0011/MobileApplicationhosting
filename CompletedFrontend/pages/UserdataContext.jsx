// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [id,setid]= useState(null);
    const [islogedin,setislogedin]=useState(false);
    return (
        <UserContext.Provider value={{ user, setUser,islogedin,setislogedin,id,setid }}>
            {children}
        </UserContext.Provider>
    );
};
