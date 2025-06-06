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
    website_description: "Homecoming project integrates digital archiving, collaborative publications, and artistic installations to preserve and share the Khinalig village's cultural narratives. Focused on the language, regional topography, and archaeological finds, it examines identity, belonging, and how local voices can be strenghtened in curatorial processes."
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
