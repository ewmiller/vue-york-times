# vue-york-times

> A minimalist approach to the news. Powered by Vue.js.

Vue York Times is a site built around the New York Times Developers API: http://developer.nytimes.com/

This site requests data from a back-end Node API I wrote, which serves as a proxy between this site and NYT itself (for safe storage of API keys, formatting of data, and other useful features).
The back-end proxy then relays information from NYT back to this Vue app, which renders each article's information as a clickable card component. 

## Roadmap

Future ideas:

- Subject selections (art, sports, etc)
- Choose day, week, or month category

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Other Dev Notes

- NYT API token may need to be reauthorized every few months
- SMMRY API token has limited uses, so be sure to periodically check on it as well.
