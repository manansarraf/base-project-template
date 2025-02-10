This is a base node js project template, which anyone can use as it has been prepared,by keeping some of the most important code principles and project management recommendations

'src' -> inside the src folder all the actual source regarding the project will reside,this will not include any kind of tests.


lets take a look inside the 'src' folder 

'config' -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. for ex: setting up 'dotenv' so that we can use envoirnment variables anywhere in a cleaner fashion. This is done in the server-config.js  file. One more example can be to setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

config.json file in config folder gives configuration for three enviornments development,production and test

'routes' -> In the rotes folder we register a route and the corresponding middleware and controllers to it

'middlewares' -> they are just going to intersept the incoming request where we can write our authenticators,validators etc.

'controllers' -> they are kind of last middlewares as post them you call your bussiness layer to execute the bussiness logic. In controllers we just recieve the incoming requests and data and then pass it to the business layer and once business layer returns an output , we structure the API response in controllers and send the output

'repositories' -> this folder contains all the logic using which we will  interact the database by writing queries, all the raw queries or ORM queries will go here.

'services' -> contains the business logic and interact with repositories for data in the database

'utils' -> contains helper methods ,error classes etc.


<!-- Setup of project -->
Inside the src/config folder create a file named as config.json and write the following code:
{
  "development": {
    "username": "root",
    "password": "mypassword",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
-- if you're using development envoirnment then mention username ,password for yur DB. and in dialect mention whatever Db you are using for ex: mariadb,mysql etc.

- if you're selecting test or production envoirnment ,make sure you also replace the host with the hosted db url
