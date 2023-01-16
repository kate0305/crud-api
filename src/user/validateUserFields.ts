import { NewUser } from '../types/types';

export const validateUserFields = (user: NewUser): boolean => {
  const arrToChek = ['username', 'age', 'hobbies'];
  const userFildsKeys = Object.keys(user);

  if (userFildsKeys.every((field) => arrToChek.includes(field))) {
    if (
      typeof user.username === 'string' &&
      typeof user.age === 'number' &&
      Array.isArray(user.hobbies) &&
      user.hobbies.every((hobby) => typeof hobby === 'string')
    )
      return true;
    console.log('Invailid field');
    //throw new Error(ErrMessages.ERR_REQUEST);
    return false;
  } else {
    console.log('Extra fields');
    return false;
  }
};
