const Metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  layouts = require('metalsmith-layouts'),
  collections = require('metalsmith-collections'),
  ignore = require('metalsmith-ignore'),
  blc = require('metalsmith-broken-link-checker'),
  _ = require('lodash');

const metalsmith = new Metalsmith(__dirname)
  .metadata({
    name: "Homecoming",
    website_description: "A short description of your project should goes here"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(ignore([]))
  .use(markdown({
    "gfm": true,
    "tables": true
  }))
  .use(collections({
    objects: {
      sortBy: 'number'
    }
  }))
  .use(blc())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build();
