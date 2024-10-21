# Welcome to Flights Service

## Project Setup
- Clone the project  on you local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a .env file in the root directory and add the following envirment variables
    - `PORT=3000`
- Inside `src/config` folder create new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <DB_login_name>,
    "password": <your_password>,
    "database": "Flight_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have added DB config as listed above go to src folder from your terminal and execute `npx sequelize db:create`
```
