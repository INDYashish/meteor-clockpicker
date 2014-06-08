Package.describe({
    summary: "Clockpicker (v0.0.6), a clock-style timepicker for Bootstrap, from Wang Shenwei, https://github.com/weareoutman/clockpicker, packaged for Meteor.js."
});

Package.on_use(function (api) {
    api.use('ui', 'client');
    api.add_files('lib/js/clockpicker.js', 'client');
    api.add_files('lib/css/clockpicker.css', 'client');
});