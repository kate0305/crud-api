import { ErrMessages, StatusCodes } from '../types/enums';
import { ErrMessage } from '../types/types';

export const handleErrorMessage = (err: unknown): string => {
  if (err instanceof Error) return err.message;
  return String(err);
};

export const handleError = (message: string): ErrMessage => {
  const { BAD_REQUEST, NOT_FOUND, SERVER_ERROR, METHOD_NOT_ALLOWED } = StatusCodes;
  const { ERR_ID_INVALID, ERR_USER_NOT_FOUND, ERR_REQUEST, ERR_PAGE_NOT_FOUND, ERR_SERVER, ERR_METHOD } = ErrMessages;
  if (message === ERR_ID_INVALID) return { statusCode: BAD_REQUEST, message: ERR_ID_INVALID };
  if (message === ERR_USER_NOT_FOUND) return { statusCode: NOT_FOUND, message: ERR_USER_NOT_FOUND };
  if (message === ERR_REQUEST) return { statusCode: BAD_REQUEST, message: ERR_REQUEST };
  if (message === ERR_PAGE_NOT_FOUND) return { statusCode: NOT_FOUND, message: ERR_PAGE_NOT_FOUND };
  if (message === ERR_PAGE_NOT_FOUND) return { statusCode: NOT_FOUND, message: ERR_PAGE_NOT_FOUND };
  if (message === ERR_METHOD) return { statusCode: METHOD_NOT_ALLOWED, message: ERR_METHOD };
  return { statusCode: SERVER_ERROR, message: ERR_SERVER };
};
