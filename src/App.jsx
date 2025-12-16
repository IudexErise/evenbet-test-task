import styles from "./App.module.scss";
import PopUp from "./components/PopUp/PopUp";

export default function App() {
  return (
    <div className={styles.container}>
      <PopUp />
    </div>
  );
}
