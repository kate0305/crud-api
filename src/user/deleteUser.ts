import { User } from '../types/types';
import { findUser } from './findUser';

export const deleteUser = async (users: User[], userID: string): Promise<boolean> => {
  const user = await findUser(users, userID);
  if (user) {
    const index = users.indexOf(user);
    users.splice(index, 1);
    return true;
  }
  return false;
};
