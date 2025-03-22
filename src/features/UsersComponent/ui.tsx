import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { IUser } from '~entities/userModel/model/types';
import { useUserStore } from '~entities/userModel/model/store';
import { Button } from '~shared/ui';

import styles from './index.module.scss';

export const UsersComponent: FC<{ children: (user: IUser) => React.ReactNode }> = ({ children }) => {
  const { users, isLoading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>{users.length && !isLoading ? users.map(children) : <span>Loading...</span>}</div>
  );
};

export const UserItem: FC<{ user: IUser }> = ({ user }) => {
  const { name, email, phone } = user;

  const [isMore, serIsMore] = useState(false);

  const showMoreToggler = () => {
    serIsMore(!isMore);
  };

  return (
    <div className={styles.userItemContainer}>
      <span>Name: {name}</span>

      <div className={clsx(styles.moreInfo, isMore && styles.isMore)}>
        <span>Email: {email}</span>
        <span>Phone: {phone}</span>
      </div>

      <Button onClick={showMoreToggler} className={styles.moreBtn}>
        Показати деталі
      </Button>
    </div>
  );
};
