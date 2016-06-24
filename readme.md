# Redux-CLI Boilerplate
Just a simple starter kit to get up and running on React/Redux projects.  

## IMPORTANT 
This boilerplate is designed for ME.  I **HIGHLY** recommend building your own
boilerplate so you understand all the tools you're using.

## Will It Be Maintained?
Probably not.  Perhaps though.

## When To Use?
This boilerplate is designed for small to medium sized applications.  If you're
planning on having > 15 routes and > 75 components than the bundle size will more
than likely be manageable using this starter kit.  If you're starting a project
you expect to get quite big than I would look into [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit) that
has code splitting built in.

## How To Use?
After installing [redux-cli](https://github.com/SpencerCDixon/redux-cli) it's pretty straight forward:

```sh
npm i redux-cli -g
redux new boilerplate <app name> 
npm install
npm start
```

### npm scripts


### file structure
```
src
├── components                # all Pure components
├── containers                # containers to 'connect' components
├── forms                     # all redux-forms
├── layouts                   # layouts used for react-router
├── redux                     # all redux related code
│   ├── middleware
│   ├── modules               # redux 'ducks'
│   ├── store
│   └── reducers.js           # final reducer that redux uses
├── static                    # static assets
│   ├── favicon.ico
│   └── index.template.html
├── styles                    # global and shared styles (rest styles belong next to components)
│   └── global.styles         # 
├── util                      # utility logic that can be extracted away from components
├── views                     # views in charge of making all the comps play nice together
├── index.js
└── routes.js
```
