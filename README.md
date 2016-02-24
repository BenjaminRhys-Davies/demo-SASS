
# SASS demonstration

## Build

The generated project includes a live-reloading static server on port `8080` (port can be changed within the `gulpfile.js` config), which will build, launch, and rebuild the app whenever you change application code. To start the server, run:

```bash
$ npm start
```

If you prefer to just build without the live reload and build-on-each-change watcher, run:

```bash
$ npm run build
```

## Achitecture
* Gulp build tooling
* SASS
* React

## Topics

This demonstration covers the following areas of interest:

* automated linting
* automated generation of source maps
* reusable modularisation of presention into:
   * components
   * functions
   * mixins
   * settings

With special emphasis upon the use of:
* BEM naming methodology
* SASS variables
* reusable mixins
* CSS layering
* Right-to-Left content direction modifiers
* CSS3 transforms & transitions
* CSS pseudo-elements
