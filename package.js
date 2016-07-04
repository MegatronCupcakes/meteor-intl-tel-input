Package.describe({
  name: 'loftsteinn:intl-tel-input',
  summary: 'Meteor package for https://github.com/jackocnr/intl-tel-input',
  version: '9.0.0',
  git: 'https://github.com/btafel/meteor-intl-tel-input.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  //== Use
  // Client only
  api.use('jquery', 'client');

  //== Add files
  // Client only
  api.addFiles([
    'lib/intl-tel-input/build/js/intlTelInput.js',
    'lib/intl-tel-input/build/css/intlTelInput.css',
    'lib/intl-tel-input/build/img/flags.png',
    'lib/intl-tel-input/build/img/flags@2x.png'
  ], 'client');
});

Package.onTest(function(api) {
  //== Use
  // Client only
  api.use([
    'tinytest',
    'btafel:intl-tel-input'
  ], 'client');

  //== Add files
  // Client only
  api.addFiles('tests/meteor-intl-tel-input.js', 'client');
});
