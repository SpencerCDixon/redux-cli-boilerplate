# Redux-CLI Boilerplate
Just a starter kit to get up and running on React/Redux projects.  

### IMPORTANT 
This boilerplate is designed for ME.  I **HIGHLY** recommend building your own
boilerplate so you understand all the tools you're using.  

### Will It Be Maintained?
Probably not.  Perhaps though.  

### When To Use?
This boilerplate is designed for small to medium sized applications.  If you're
planning on having > 15 routes and > 75 components than the bundle size will more
than likely be manageable using this starter kit.  If you're starting a project
you expect to get quite big than I would look into [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) that
has code splitting built in.

### How To Use?
After installing [redux-cli](https://github.com/SpencerCDixon/redux-cli) it's pretty straight forward:

```sh
npm i redux-cli -g
redux new <app name> -b
npm install
npm start
```

### Noteworthy npm scripts
|Name|Description|
|---|---|
|start|Spins up webpack dev server with Hot Module Reloading|
|test|Runs parallel test suite using AVA|
|lint|Runs eslint through `src` directory|
|deploy|Lints, cleans, and compiles src in production mode for deployment|

### File structure
```
src
├── components                # all Pure components
├── containers                # containers to 'connect' components
├── forms                     # all redux-forms
├── layouts                   # layouts used for react-router
├── redux                     # all redux related code
│   ├── middleware            # folder to store middlewares
│   ├── modules               # redux 'ducks'
│   ├── store                 # store creation and middleware config
│   └── reducers.js           # final reducer that redux uses
├── static                    # static assets folder
│   ├── favicon.ico
│   └── index.template.html
├── styles
   ├── shared                 # place to store shared CSS Module compositions
   │   ├── animations.css
   ├── css-global-vars.js     # global CSS variables that will be included for all Modules
   └── global.styles          # global styles like those from react plugins
├── util                      # utility logic that can be extracted away from components
├── views                     # views in charge of making all the comps play nice together
├── index.js
└── routes.js
```

### PostCSS, CSSModules, & CSS Variables
Global variables live inside `styles/css-global-vars.js` and will be imported
into all CSSModule files as sass like variables using `$` prefix.

### TODO
- [ ] make the view blueprint add the import statements  
- [ ] create a route blueprint that creates a view and a route  
