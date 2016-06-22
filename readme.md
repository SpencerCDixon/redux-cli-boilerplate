# Redux-CLI Boilerplate
Just a simple starter kit to get up and running on React/Redux projects.  All my
favorite tools are baked in to make it super easy to use.

## Will It Be Maintained?
I make no promises this project is going to be extensively maintained.
Initially this is just being built personally so I can prototype app ideas
faster with generators and tooling that I enjoy using.  If it ends up being
useful I may end up open sourcing this and maintaining.  Use at your own risk.

## When To Use?
This boilerplate is designed for small to medium sized applications.  If you're
planning on having > 15 roues and > 75 components than the bundle size will more
than likely be manageable using this starter kit.

## How To Use?
After installing [redux-cli]() it's pretty straight forward:

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
│   └── global.css
├── util                      # utility logic that can be extracted away from components
├── views                     # views in charge of making all the comps play nice together
├── index.js
└── routes.js
```
