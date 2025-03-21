import { FC } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

export const Header: FC<{ scrolled: boolean }> = ({ scrolled }) => {
  return <header className={clsx(styles.header, scrolled && styles.headerSlide)}>Header</header>;
};
