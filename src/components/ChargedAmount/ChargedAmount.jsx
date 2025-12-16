import styles from "./ChargedAmount.module.scss";
import card from "../../../public/card.png";

export default function ChargedAmount() {
  return (
    <div className={styles.container}>
      <div className={styles.chipContainer}>
        <img src={card} alt="" className={styles.img} />
        <span className={styles.subtext}>You will be charged:</span>
      </div>
      <span className={styles.text}>$999.999</span>
    </div>
  );
}
