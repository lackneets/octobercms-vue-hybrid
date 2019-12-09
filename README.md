# OctoberCMS Vue Hybrid Frontend

## Start a new project

Clone this repo into OctoberCMS under `themes`, such as `themes/frontend`

Then 

```
cd themes/frontend
```

```
npm install
```

Make a copy of `.env` to `.env.local`, set the public host to your development server

```
DEV_SERVER_PORT=9487
DEV_SERVER_PUBLIC=example.org:9487
```

### Create new page / entey point

Put a entry point javascript such as `src/example.js`,  
then put a same named template like `src/example.htm`

Note: execute `npm run serve` or `npm run serve build` after every entry point changed, otherwise the compiler won't recognize that files 

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
