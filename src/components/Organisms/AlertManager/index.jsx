import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
import Alert from "../../Atoms/Alert/index.jsx";
import React, { useState, useEffect } from "react";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

    useEffect(() => {
      const setInterval = () => {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    };
  
    if (AlertHandlerContext.visible == true) {
      setInterval();
    }
    console.log(AlertHandlerContext.visible);
  }, [AlertHandlerContext.visible]);
  return (
    <Alert
      isActive={AlertHandlerContext.visible}
      errorMessage={AlertHandlerContext.errorText}
    ></Alert>
  );
};

export default AlertManager;
