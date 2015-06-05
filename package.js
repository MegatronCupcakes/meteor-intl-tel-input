Package.describe({
  name: 'loftsteinn:intl-tel-input',
  summary: 'Meteor package for https://github.com/Bluefieldscom/intl-tel-input',
  version: '5.8.7_2',
  git: 'https://github.com/oskarszoon/meteor-intl-tel-input.git'
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
    'loftsteinn:intl-tel-input'
  ], 'client');

  //== Add files
  // Client only
  api.addFiles('tests/meteor-intl-tel-input.js', 'client');
});
