Package.describe({
  name: 'warrenmcquinn:meteor-scrollreveal',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'scrollReveal.js packaged for Meteor. Reveals elements using natural language keywords.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/warrenmcquinn/meteor-scrollreveal.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('scrollReveal.js');
  api.addFiles('export.js');
});

Package.onTest(function(api) {
});
