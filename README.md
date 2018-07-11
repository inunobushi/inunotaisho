# InuNoTaisho: Angular and .NET Core 2 stack

This is the Angular 6 and .NET Core 2 fullstack version of my website which is www.ebseiten.com.

Its about 52% of the way complete. It runs so long as you have `mongodb` running.

This backend is using .NET Core 2 and its Web Api 2 functionality.

Before taking futher steps, make sure you have a few things installed. 

**Download Visual Studio Community**
- If running Windows 7 SP1 and later, download [Visual Studio for Windows](https://www.visualstudio.com/thank-you-downloading-visual-studio/?sku=Community&rel=15)

- If running macOS Sierra 10.12 or later, download [Visual Studio for Mac](https://www.visualstudio.com/thank-you-downloading-visual-studio-mac/?sku=communitymac&rel=15#)


**First download Visual Studio Code.**

- If running Linux, Visual Studio is not available. Fret not, there is a way around that.
- First download Visual Studio Code. Depending on your flavor of Linux you will either download the [Debian/Ubuntu Version](https://code.visualstudio.com/docs/?dv=linux64_deb) or the [Red Hat/Fedora/SUSE version](https://code.visualstudio.com/docs/?dv=linux64_rpm).
- Second you will need to download [mono](https://www.mono-project.com/download/stable/#download-lin).


**Download NodeJS LTS version. You can download one of two ways.**

- First option is downloading `NodeJS` from the [NodeJS Website](https://nodejs.org/en/)
- Second for macOS/ Linux users I would advise you to install [NVM](https://github.com/creationix/nvm) to allow for multiple versions of node to be used on your system.


Finally clone this repo. Before taking futher steps, make sure you have `nodejs` and `npm` installed. Then run `npm install` to install all required `node_modules`.

All modules a stored in `node_modules` and `webpack` is used as a module loader.  

Make sure you have `mongodb` installed. `Redis-server` server is no longer required due to the use of `JSON Web Tokens` to handle sessions. Open another terminal tab and create the desired name for your database using **Mongo Shell**. Run the command `mongo` to open the shell and run the `use "DATABASE_NAME"` to create your desired database.
 
For easier access use something like `Robo3T`or something similar. Command line control of `mongo` is also an option, but is not covered by this readme.

 All modules a stored in `node_modules` and `webpack` is used as a module loader. The `webpack.config.env.js` is basic, but it does what we need. 

 Go into the `inunotaisho.json` and either copy the dev database or change database to your desired name. Either way, the databse must be setup using something like `Robo 3T`or something similar. Use of the `mongod` shell is also an option, but is not covered by this readme. 

Once finished, then and only then, can you run `npm start`.

Navigate to `localhost:5000` and you should be there. 

**Documentation**
- https://dotnet.github.io/
- http://mongoosejs.com/docs/guide.html
- https://docs.mongodb.com/manual/
- https://webpack.js.org/configuration/
- https://angular.io/docs
- http://www.typescriptlang.org/docs/home.html
- https://github.com/DefinitelyTyped/DefinitelyTyped
- http://lesscss.org/

**Supporting Software Documentation**
- https://robomongo.org/
