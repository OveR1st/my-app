import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { IUser } from '~entities/userModel/model/types';
import { useUserStore } from '~entities/userModel/model/store';
import { Button } from '~shared/ui';

import styles from './index.module.scss';

export const UsersComponent = () => {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      {users.length ? (
        users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

const UserItem: FC<{ user: IUser }> = ({ user }) => {
  const { name, email, phone } = user;

  const [isMore, serIsMore] = useState(false);

  const showMoreToggler = () => {
    serIsMore(!isMore);
  };

  return (
    <div className={styles.userItemContainer}>
      <span>{name}</span>

      <div className={clsx(styles.moreInfo, isMore && styles.isMore)}>
        <span>{email}</span>
        <span>{phone}</span>
      </div>

      <Button onClick={showMoreToggler} className={styles.moreBtn}>
        Показати деталі
      </Button>
    </div>
  );
};
