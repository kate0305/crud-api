import { v4 as uuidv4 } from 'uuid';
import { validateUserFields } from './validateUserFields';
import { NewUser, User } from '../types/types';
import { users } from '../user/users';
import { ErrMessages } from '../types/enums';

export const createID: string = uuidv4();

export const createUser = async (newUser: NewUser): Promise<User> => {
  if (validateUserFields(newUser)) {
    const id: string = uuidv4();
    const user: User = { id, ...newUser };
    users.push(user);
    return user;
  } else {
    throw new Error(ErrMessages.ERR_REQUEST);
  }
};
