const path = require('path');

module.exports = {
  entry: './dist/Modal.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Modal.js', 
    library: 'myReactAppHakim10', 
    libraryTarget: 'umd'
  },  
  resolve: {
    extensions: ['.js', '.jsx'] 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' 
        }
      }
    ]
  },
  externals: {
    react: 'react', 
    'react-dom': 'react-dom'
  }
};
