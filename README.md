# Live Beyond Your Life

This is the website for "Live Beyond Your Life" organ donation campaign in Ontario, Canada.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**Git:**
To clone this project to a local repository, it is required using [Git](https://git-scm.com/). Follow instructions provided [here](https://git-scm.com/downloads) to install and configure Git.

**NPM & NodeJS:**    
To develop this project, it is required installing and running [NPM](https://www.npmjs.com/), and consequently [NodeJS](https://nodejs.org/en/). Follow instructions provided [here](https://nodejs.org/en/download/) to install and configure properly NodeJS and NPM in your machine.

## Deployment

After project cloned and all prerequisites installed, it is necessary running the command below in the root directory to deploy properly all development dependencies of this project:

```
npm install
```

Webpack is implemented as a module bundler for this project. Webpack tasks include: concatenation, js uglify and syntax transformation with Babel; it runs sass. Webpack watches for changes in js and all scss files. Webpack will only uglify files during production. In order to watch changes made during development in the files, run webpack inside the project folder by the command below:

```npm run dev```

For production, just run the follow command inside the root folder:

```npm run production```

Furthermore, it is necessary to import the database content to local application. It is possible to import it using PHPMyAdmin interface or via command line:

```
mysql -h localhost -u <user> -p <password> <database name> < db_livebeyond.sql
```

After importing database content to local database application, it is necessary to configure node credentials configuration to connect to your database. Into the root folder exists a file called <code>config-sample.js</code>. Copy or rename this file to <code>config.js</code>:

```
cp config-sample.js config.js
```

Edit <code>config.js</code>, including the correct credentials of your database application.

## Execution

This project is built to run in NodeJS, based on NPM. Therefore, on Terminal, run the command below in the root folder of the project to execute the application:

```
npm start
```

Now, in any browser you like, access the URL `http://localhost:3000` to visit the main page of the campaign website. To access the Admin page, go to `http://localhost:3000/admin` and insert the correct credentials.

## Authors

* [**Barbara Bombachini**](https://github.com/bbombachini)  
* [**Emre Filiz**](https://github.com/emrefiliz)  
* [**Eric Lee**](https://github.com/elee378)  
* [**Flavia Tozzini**](https://github.com/f-tozzini)  
* [**Mauricio Silveira**](https://github.com/maursilveira)  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
