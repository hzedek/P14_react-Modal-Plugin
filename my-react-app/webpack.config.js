const path = require('path');

module.exports = {
  entry: './src/Modal.jsx', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Modal.js', 
    library: 'myReactAppHakim10', 
    libraryTarget: 'umd'
  },  
  resolve: {
    extensions: ['.js', '.jsx','.css'] 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' 
        }
      },
      {
        test: /\.css?$/,
        use:  ["style-loader","css-loader"]
      }
    ]
  },
  externals: {
    react: 'react', 
    'react-dom': 'react-dom'
  }
};
