/*
 * grunt-typographic-adoption
 * https://github.com/smaxtastic/grunt-typographic-adoption
 *
 * Copyright (c) 2015 Stephan Max
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var cheerio = require('cheerio');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('typographic_adoption', 'A small, educational Grunt plugin that tackles typographic widows in HTML block elements', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      selectors: 'h1.h2.h3.h4.h5.h6.p.blockquote.th.td.dt.dd.li'.split('.')
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var filepath = f.src, content, $;

      content = grunt.file.read(filepath);
      $ = cheerio.load(content, { decodeEntities: false });

      $(options.selectors.join(',')).each(function() {
        var text = $(this).html();
        text = text.replace(/ ([^ ]*)$/, '&nbsp;$1');
        $(this).html(text);
      });

      grunt.file.write(f.dest, $.html());
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
