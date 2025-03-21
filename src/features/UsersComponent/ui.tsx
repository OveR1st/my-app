import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button } from '~shared/ui';
import { IUser } from '~entities/userModel/model/types';
import { useUserStore } from '~entities/userModel/model/store';

const UserItem: FC<{ user: IUser }> = ({ user }) => {
  const { name, email, phone } = user;

  const [isMore, serIsMore] = useState(false);

  const showMoreToggler = () => {
    serIsMore(!isMore);
  };
  return (
    <div>
      <span>{name}</span>
      {isMore && (
        <>
          <span>{email}</span>
          <span>{phone}</span>
        </>
      )}

      <Button onClick={showMoreToggler} />
    </div>
  );
};

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
