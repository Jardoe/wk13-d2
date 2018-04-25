const config = {
  entry: __dirname + '/client/src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public'
  },
  mode: 'development'
};

module.exports = config;
