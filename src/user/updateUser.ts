import { User } from '../types/types';
import { findUser } from './findUser';
import { NewUser } from '../types/types';
import { validateUserFields } from './validateUserFields';
import { ErrMessages } from '../types/enums';

export const updateUser = async (users: User[], userID: string, newUser: NewUser): Promise<User> => {
  const user = await findUser(users, userID);
  const isValid = await validateUserFields(newUser);
  if (user) {
    if (isValid) {
      const updatedUser = { id: userID, ...newUser };
      users[users.indexOf(user)] = updatedUser;
      return updatedUser;
    } else {
      throw new Error(ErrMessages.ERR_REQUEST);
    }
  }
  return user;
};
