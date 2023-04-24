import { useAlertHandlerContext } from "../../../contexts/alert_handler.jsx";
import React, { useState } from "react";

/* コンポーネント関数内 */
//Contextを取得
const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  //AlertHandlerContextから直接値が取り出せる
  AlertHandlerContext.setAlert("タスクの名前が設定されていません。"); //Alertの表示
  setInterval(() => {
    const [timer, setTimer] = useState(0);
    setTimer(timer++);
    if (timer > 5) {
      AlertHandlerContext.closeAlert();
    }
  });
};
export default AlertManager;
