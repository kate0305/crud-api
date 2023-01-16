import { User } from '../types/types';
import { validate } from 'uuid';
import { ErrMessages } from '../types/enums';

export const findUser = async (users: User[], userID: string): Promise<User> => {
  const { ERR_ID_INVALID, ERR_USER_NOT_FOUND } = ErrMessages;
  const validateID = validate(userID);
  if (validateID) {
    const user = users.find((user) => user.id === userID);
    if (user) {
      return user;
    } else {
      throw new Error(ERR_USER_NOT_FOUND);
    }
  } else {
    throw new Error(ERR_ID_INVALID);
  }
};
