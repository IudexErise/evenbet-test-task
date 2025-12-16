import styles from "./AmountSelect.module.scss";

export default function AmountSelect({ value, setValue }) {
  const MIN = 0.5;
  const MAX = 50;

  const clamp = (v) => {
    if (v < MIN) return MIN;
    if (v > MAX) return MAX;
    return v;
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setValue(clamp(value));
  };

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };

  const setMin = () => setValue(MIN);
  const setMax = () => setValue(MAX);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button type="button" onClick={setMin} className={styles.button}>
          Min ${MIN}
        </button>

        <div className={styles.inputField}>
          <span className={styles.label}>Amount</span>
          <input
            type="number"
            min={MIN}
            max={MAX}
            step="0.1"
            value={value}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <button type="button" onClick={setMax} className={styles.button}>
          Max ${MAX}
        </button>
      </div>

      <input
        type="range"
        min={MIN}
        max={MAX}
        step="0.1"
        value={value}
        onChange={handleSliderChange}
        className={styles.slider}
      />
    </div>
  );
}
