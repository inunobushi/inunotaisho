# InuNoTaisho: Angular and .NET Core 2 stack

This is the Angular 4 and .NET Core 2 fullstack version of my website which is www.ebseiten.com.

Its about 52% of the way complete. It runs so long as you have `postegres` and `redis` running with sequelize files migrated

Plans are in the works to migrate the backend from `es5` to `TypeScript`.

First clone this repo. Before taking futher steps, make sure you have `nodejs` and `npm` installed. Then run `npm install` to install all required `node_modules`.

All modules a stored in `node_modules` and `webpack` is used as a module loader. The `webpack.config.env.js` is basic, but it does what we need. 

 Make sure you have `postgres` and `redis-server` running. Go into the `config folder` and either copy the 
dev database or change database to your desired name. Either way, the databse must be setup using something like `Robo 3T`or something similar. Use of the `mongod` shell is also an option, but is not covered by this readme.

Once connected and `sequelize` migration files loaded in the database, run `redis-server` in another terminal tab. 
Redis is your session server and is vitale to for applications that require you to login or logout. 

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:5000` and you should be there. 

**Documentation**
- https://dotnet.github.io/
- https://redis.io/
- https://expressjs.com/
- https://webpack.js.org/configuration/
- https://v4.angular.io/docs
- http://www.typescriptlang.org/docs/home.html
- https://github.com/DefinitelyTyped/DefinitelyTyped
- http://lesscss.org/

**Supportting Software Documentation**
- https://robomongo.org/
