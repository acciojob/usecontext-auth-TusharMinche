
import React, { createContext, useState } from "react";
import './../styles/App.css';
import Auth from "./Auth";

export const AuthContext = createContext();

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  

  return (
    <AuthContext.Provider value={{isAuthorized, setIsAuthorized}}>
    <div>
        <h1>Click on the checkbox to get authonticated</h1>
        <Auth />
    </div>
    </AuthContext.Provider>
  )
}

export default App
