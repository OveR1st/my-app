import { ButtonHTMLAttributes, FC } from 'react';
import styles from './index.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styles.button} {...props}>
      Показати деталі
    </button>
  );
};
