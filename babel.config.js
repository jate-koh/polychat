//require('dotenv').config({path: "./.env"});

const babelconfig = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      // ['dotenv-import', {
      //   "moduleName": "@env",
      //   "path": ".env",
      //   "blocklist": null,
      //   "allowlist": null,
      //   "safe": false,
      //   "allowUndefined": false
      // }]
    //   ['module:react-native-dotenv',{ 
    //     moduleName: "@env",
    //     path: ".env",
    //     blacklist: null,
    //     whitelist: null,
    //     safe: false,
    //     allowUndefined: false
    //   }
    // ], 
    //  ['transform-inline-environment-variables', { 
    //    include: [
    //     'NODE_ENV','API_ENV',
    //     'REACT_APP_API_KEY',
    //     'REACT_APP_AUTH_DOMAIN',
    //     'REACT_APP_PROJECT_ID',
    //     'REACT_APP_STORAGE_BUCKET',
    //     'REACT_APP_MESSAGING_SENDER_ID',
    //     'REACT_APP_APP_ID',
    //     'REACT_APP_MEASUREMENT_ID'
    //   ]
    //  }
    //] 
  ]
  };
};

console.log("> Running Babel Config");
module.exports = babelconfig;
