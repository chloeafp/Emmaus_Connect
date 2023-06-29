import React, { useState, useEffect, useMemo } from "react";
import Router from "./navigation/Router";
import axios from "axios";
import SmartphoneContext from "./components/contexts/SmartphoneContext";
import UserContext from "./components/contexts/UserContext";

function App() {
  const [smartphoneData, setSmartPhoneData] = useState(undefined)
  const [user, setUser] = useState(undefined)

  console.log("user",user);
  useEffect(() => {

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/smartphone`)
      .then((response) => setSmartPhoneData(response.data))
      .catch((error) => console.error(error.message));
  }, []);


  const contextValue = useMemo(() => ({
    smartphoneData,
    setSmartPhoneData,}),
    [smartphoneData,
    setSmartPhoneData,]);

    const userContextValue = useMemo(() => ({
      user,
      setUser,}),
      [user,
      setUser,]);


  return (

    <div>
      <UserContext.Provider value={userContextValue}>
      <SmartphoneContext.Provider value={contextValue}>
      <Router />
      </SmartphoneContext.Provider>
      </UserContext.Provider>
    </div>

  );

}


export default App;
