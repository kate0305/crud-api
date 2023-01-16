import { User } from '../types/types';
import { findUser } from './findUser';
import { NewUser } from '../types/types';
import { validateUserFields } from './validateUserFields';
import { ErrMessages } from '../types/enums';

export const updateUser = (users: User[], userID: string, newUser: NewUser): User | void => {
  const user = findUser(users, userID);
  if (user) {
    if (validateUserFields(newUser)) {
      const updatedUser = { id: userID, ...newUser };
      users[users.indexOf(user)] = updatedUser;
      return updatedUser;
    } else {
      throw new Error(ErrMessages.ERR_REQUEST);
    }
  }
};
