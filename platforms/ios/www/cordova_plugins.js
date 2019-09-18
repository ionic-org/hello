cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-appavailability.AppAvailability",
      "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
      "pluginId": "cordova-plugin-appavailability",
      "clobbers": [
        "appAvailability"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-appavailability": "0.4.2"
  };
});