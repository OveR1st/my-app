import styles from './index.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <div>Sidebar content</div>
      </div>
    </aside>
  );
};
