import { UserItem, UsersComponent } from '~features';

export const MainWidget = () => {
  return (
    <>
      <UsersComponent children={(user) => <UserItem key={user.id} user={user} />} />
    </>
  );
};
