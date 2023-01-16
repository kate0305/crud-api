import * as dotenv from 'dotenv';
import { createServer } from 'node:http';
import { users } from './user/users';
import { URL } from './constants';
import { StatusCodes, ErrMessages } from './types/enums';
import { createUser } from './user/createUser';
import { findUser } from './user/findUser';
import { updateUser } from './user/updateUser';
import { deleteUser } from './user/deleteUser';
import { handleError, handleErrorMessage } from './utils/handleError';
import { User } from './types/types';

dotenv.config();
const PORT = process.env.PORT || 4000;
const { OK, CREATED, NO_CONTENT } = StatusCodes;
const { ERR_PAGE_NOT_FOUND, ERR_METHOD } = ErrMessages;

export const server = createServer(async (req, res) => {
  const { method, url } = req;
  let responseBody: User | User[] | boolean = true;
  try {
    res.setHeader('Content-Type', 'application/json');

    const parseURL = url?.split('/').filter(Boolean) as string[];
    const usersURL = parseURL.slice(0, 2).join('/');
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const user = Buffer.concat(chunks).toString();

    if (url === URL) {
      switch (method) {
        case 'GET':
          responseBody = users;
          res.statusCode = OK;
          break;
        case 'POST':
          responseBody = await createUser(JSON.parse(user));
          res.statusCode = CREATED;
          break;
        default:
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
          throw new Error(ERR_METHOD);
      }
    } else if (parseURL.length === 3) {
      if (`/${usersURL}` === URL) {
        switch (method) {
          case 'GET':
            res.statusCode = OK;
            responseBody = await findUser(users, parseURL[2]);
            break;
          case 'PUT':
            res.statusCode = OK;
            responseBody = await updateUser(users, parseURL[2], JSON.parse(user));
            break;
          case 'DELETE':
            responseBody = await deleteUser(users, parseURL[2]);
            if (!responseBody) {
              res.end(JSON.stringify(responseBody));
            }
            res.statusCode = NO_CONTENT;
            break;
          default:
            res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
            throw new Error(ERR_METHOD);
        }
      }
    } else {
      throw new Error(ERR_PAGE_NOT_FOUND);
    }
    res.end(JSON.stringify(responseBody));
  } catch (err) {
    const message = handleErrorMessage(err);
    const body = handleError(message);
    const { statusCode } = body;
    res.statusCode = statusCode;
    res.end(JSON.stringify(body));
  }
});

server.listen(PORT, () => {
  console.log('Server created!');
});
