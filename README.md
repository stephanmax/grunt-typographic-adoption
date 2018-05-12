# grunt-typographic-adoption

> A small, educational Grunt plugin that tackles typographic orphans in HTML block elements

I created this Grunt plugin to accompany my tutorial [Build and Publish Your Own Grunt Plugin](https://www.sitepoint.com/build-and-publish-your-own-grunt-plugin/) on SitePoint. It implements a simple task that replaces the last space in block elements with a non-breakable space to avoid typographic orphans.

![Typographic orphans and widows](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/94951ff0-b132-4e39-a108-e540a5d83b4a/image5.jpg)

The image above appeared in the article [*8 Simple Ways to Improve Typography In Your Designs*](http://www.smashingmagazine.com/2009/04/8-simple-ways-to-improve-typography-in-your-designs/) by Antonio Carusone on Smashing Magazine.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typographic-adoption --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typographic-adoption');
```

## The "typographic_adoption" task

### Overview
In your project's Gruntfile, add a section named `typographic_adoption` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  typographic_adoption: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.selectors
Type: `Array`

Default value: `['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'th', 'td', 'dt', 'dd', 'li']`

An array of standard CSS selectors to control which elements get processed by the task.

### Usage Examples

#### Default Options
This example would tackle typographic orphans in all block elements specified in the default value of `options.selectors`.

```js
grunt.initConfig({
  typographic_adoption: {
    options: {},
    files: {
      'dest/default_options': [ 'src/sourcefile' ],
    },
  },
});
```

#### Custom Options
This example shows how you can overwrite the default value of `options.selectors` with any array of standard CSS selectors to steer which elements get processed by this task.

```js
grunt.initConfig({
  typographic_adoption: {
    options: {
      selectors: ['p', '.quote', '#masthead-title']
    },
    files: {
      'dest/default_options': [ 'src/sourcefile' ],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

- 0.1.0

  First version
