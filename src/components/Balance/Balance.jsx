import styles from "./Balance.module.scss";

export default function Balance({ moneyType }) {
  return (
    <div className={styles.container}>
      <div className={styles.chipContainer}>
        <img src="./golden.png" alt="" className={styles.img} />
        <span className={styles.subtext}>Available balance:</span>
      </div>
      <div className={styles.balanceContainer}>
        <span className={styles.subtext}>Real money:</span>
        <span
          className={moneyType === "cash" ? styles.text : styles.goldenText}
        >
          $80
        </span>
        {moneyType === "cash" && (
          <span className={styles.subtext}>Cash money:</span>
        )}
        {moneyType === "cash" && (
          <span className={styles.goldenText}>C$150</span>
        )}
      </div>
    </div>
  );
}
