import styled from "styled-components";
import COLOR from "../../../variables/color";

const Alert = (isActive) => {
  return (
    <AlertComponent isActive={isActive}>
      タスクの名前が設定されていません。
    </AlertComponent>
  );
};

const AlertComponent = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
  padding: 10px 20px;
  gap: 10px;
  width: 400px;
  height: 40px;
  background-color: ${COLOR.RED};
  color: ${COLOR.WHITE};
  font-size: 14px;
  display: flex;
  border-radius: 4px;
`;

export default Alert;
