# crud-api

### About
This is a simple CRUD API using an in-memory database.

### Installation guide
```
git clone git@github.com:kate0305/crud-api.git
cd crud-api
git checkout dev
npm i
example.env file rename to .env
```

### How to run API
`"start:dev": "nodemon"` Development mode

`"start:prod": "webpack && node ./dist/bundle.js"` Production mode

`"lint": "prettier --check ./src"` Сheck files with Prettier

`"lint:fix": "prettier --write ./src"` Format all files with Prettier

### Database Schema

#### User
Users are stored as objects with the following properties:

  - `id` — unique identifier (`string`, `uuid`) generated on server side
  - `username` — user's name (`string`, **required**)
  - `age` — user's age (`number`, **required**)
  - `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)

#### Routes API
#### Users
Routes | HTTP | Description
--- | --- | ---
**/api/users** | `GET` | Get all persons
**/api/users** | `POST` | Create a new user and store it in a database

#### User
Routes | HTTP | Description
--- | --- | ---
**/api/users/{userId}** | `GET` | Get user by ID
**/api/users/{userId}** | `PUT` | Update User by ID
**/api/users/{userId}** | `DELETE` | Delete User by ID from database

