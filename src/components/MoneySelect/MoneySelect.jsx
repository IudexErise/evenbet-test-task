import styles from "./MoneySelect.module.scss";

export default function MoneySelect({ value, setValue }) {
  return (
    <div className={styles.container}>
      <label className={styles.radio}>
        <input
          type="radio"
          name="moneyType"
          value="real"
          checked={value === "real"}
          onChange={() => setValue("real")}
        />
        <span className={styles.icon} />
        Use real money
      </label>

      <label className={styles.radio}>
        <input
          type="radio"
          name="moneyType"
          value="cash"
          checked={value === "cash"}
          onChange={() => setValue("cash")}
        />
        <span className={styles.icon} />
        Use cash money
      </label>
    </div>
  );
}
