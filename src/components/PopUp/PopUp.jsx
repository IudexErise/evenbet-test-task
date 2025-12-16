import { useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./PopUp.module.scss";
import MoneySelect from "../MoneySelect/MoneySelect";
import GameType from "../GameType/GameType";
import Balance from "../Balance/Balance";
import ChargedAmount from "../ChargedAmount/ChargedAmount";
import AmountSelect from "../AmountSelect/AmountSelect";

export default function PopUp() {
  const [moneyType, setMoneyType] = useState("cash");
  const [amount, setAmount] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.closeButton}>
        <CloseButton onClick={() => alert("Close")} />
      </div>
      <h1 className={styles.headline}>Buy-In</h1>
      <MoneySelect value={moneyType} setValue={setMoneyType} />
      <GameType />
      <Balance moneyType={moneyType} />
      <ChargedAmount />
      <AmountSelect value={amount} setValue={setAmount} />
    </div>
  );
}
