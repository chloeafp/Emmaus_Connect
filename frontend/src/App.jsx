import React, { useState, useEffect, useMemo } from "react";
import NavBar from "./components/NavBar/NavBar";
import Router from "./navigation/Router";
import axios from "axios";
import SmartphoneContext from "./components/contexts/SmartphoneContext";

function App() {
  const [smartphoneData, setSmartPhoneData] = useState(undefined)


  useEffect(() => {
    axios
      .get(`http://localhost:5004/api/smartphone`)
      .then((response) => setSmartPhoneData(response.data))
      .catch((error) => console.error(error.message));
  }, []);

  console.log(smartphoneData);

  const contextValue = useMemo(() => ({
    smartphoneData,
    setSmartPhoneData,}),
    [smartphoneData,
    setSmartPhoneData,]);



  return (
    <div className="">
      <SmartphoneContext.Provider value={contextValue}>
      <NavBar />
      <Router />
      </SmartphoneContext.Provider>
    </div>
  );
}

export default App;
