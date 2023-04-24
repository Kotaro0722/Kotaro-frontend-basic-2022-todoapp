import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
import Alert from "../../Atoms/Alert/index.jsx";
import React, { useState, useEffect } from "react";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  const setInterval = () => {
    setTimeout(() => {
      AlertHandlerContext.closeAlert();
    }, 5000);
  };
  useEffect(() => {
    if (AlertHandlerContext.visible == true) {
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
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
