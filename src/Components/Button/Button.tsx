import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary"; // [] on variants
  onClick?: () => void;
}

export function Button({ label, variant, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles["button"]} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
