# InuNoTaisho: Angular and .NET Core 2 stack

This is the Angular 4 and .NET Core 2 fullstack version of my website which is www.ebseiten.com.

Its about 52% of the way complete. It runs so long as you have `mongodb` and `redis` running with sequelize files migrated

This backend is using .NET Core 2 and its Web Api 2 functionality.

First clone this repo. Before taking futher steps, make sure you have a few things installed. 

Download Visual Studio Community 
    - If running Windows 7 SP1 and later, download [Visual Studio for Windows](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15) 
    - If running macOS Sierra 10.12 or later, download [Visual Studio for Mac](https://www.visualstudio.com/thank-you-downloading-visual-studio-mac/?sku=communitymac&rel=15#)
    - If running Linux, Visual Studio is not available. Fret not, there is a way around that. First download Visual Studio Code. 
      Depending on your flavor of Linux you will either download the [Debian/Ubuntu Version](https://code.visualstudio.com/docs/?dv=linux64_deb) or the [Red Hat/Fedora/SUSE version](https://code.visualstudio.com/docs/?dv=linux64_rpm). 
      Second you will need to download [mono](https://www.mono-project.com/download/stable/#download-lin).

Download NodeJS LTS version. You can download one of two ways. 
    - First option is downloading `NodeJS` from the [NodeJS Website](https://nodejs.org/en/)
    - Second for macOS/ Linux users I would advise you to install [NVM](https://github.com/creationix/nvm) to allow for multiple versions of node to be used on your system.

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
