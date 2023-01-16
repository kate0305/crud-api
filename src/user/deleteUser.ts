import { User } from '../types/types';
import { findUser } from './findUser';
import { NewUser } from '../types/types';
import { validateUserFields } from './validateUserFields';

export const deleteUser = async (users: User[], userID: string, newUser: NewUser): Promise<boolean> => {
  const user = findUser(users, userID);
  
  if (user) {
    if (validateUserFields(newUser)) {
      const index = users.indexOf(user);
      users.splice(index, 1);
      return true;
    }
  }
  return false;
};
