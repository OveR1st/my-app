import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button } from '~shared/ui';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserItem: FC<{ user: User }> = ({ user }) => {
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
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers);
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
