import styles from "./GameType.module.scss";
import chip from "../../../public/chip.png";

export default function GameType() {
  return (
    <div className={styles.container}>
      <div className={styles.chipContainer}>
        <img src={chip} alt="" className={styles.img} />
        <span className={styles.subtext}>Game type:</span>
      </div>
      <span className={styles.text}>NL Hold’em 2/4</span>
    </div>
  );
}
