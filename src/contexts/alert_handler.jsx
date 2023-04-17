import React, { createContext, useContext, useState } from "react";
import Alert from "../components/Atoms/Alert/index.jsx";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    setAlertState({ visible: true, errorText: errorText });
    <Alert isActive={alertState.visible} errorMessage={errorText}></Alert>;
  };

  const closeAlert = () => {
    setAlertState({ visible: false, errorText: errorText });
    <Alert isActive={alertState.visible}></Alert>;
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
