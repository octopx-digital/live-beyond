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

## Execution

This project is built to run in NodeJS, therefore it is using nodemon as a utility to monitor for any changes in your source and automatically restart your server. To install, get node.js, then from your terminal run:

```npm install -g nodemon```

Then, to execute this command, run in the root directory of your local repository of the project:

```
nodemon app
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
