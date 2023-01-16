export enum StatusCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export enum ErrMessages {
  ERR_ID_INVALID = 'User ID is invalid',
  ERR_USER_NOT_FOUND = 'User is not found',
  ERR_REQUEST = 'Request body does not contain required fields',
  ERR_PAGE_NOT_FOUND = 'Page not found on this server',
  ERR_SERVER = 'The server encountered an error and could not complete your request',
}
