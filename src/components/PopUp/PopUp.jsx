import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./PopUp.module.scss";
import MoneySelect from "../MoneySelect/MoneySelect";

export default function PopUp() {
  const [money, setMoneyType] = useState("cash");

  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.closeButton}>
        <CloseButton onClick={() => alert("Close")} />
      </div>
      <h1 className={styles.headline}>Buy-In</h1>
      <MoneySelect value={money} setValue={setMoneyType} />
    </div>
  );
}
