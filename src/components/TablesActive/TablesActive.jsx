import styles from "./TablesActive.module.scss";

export default function TablesActive({ value, setValue }) {
  const decrement = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setValue(value < 1 ? 1 : value);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={decrement}
        disabled={value === 1}
        className={styles.button}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L18 11Z"
              fill="white"
            />
          </g>
        </svg>
      </button>

      <div className={styles.inputField}>
        <span className={styles.label}>Number of tables</span>
        <input
          type="number"
          min={1}
          value={value}
          onChange={handleInputChange}
          className={styles.input}
        />
      </div>

      <button onClick={increment} className={styles.button}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V6Z"
            fill="white"
          />
          <path
            d="M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L18 11Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
