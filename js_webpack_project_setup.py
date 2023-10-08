import os
import json


PROJECT_NAME = os.path.basename(os.path.dirname(__file__))

INDEX_JS_CONTENT = '''import "./css";
console.log("Test");
'''
INDEX_HTML_CONTENT = f'''<html></html>
<html lang="en">
  <html></html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{PROJECT_NAME.capitalize()}</title>

  </head>
<body>
  
  <script src="main.js" async></script>
</body>
</html>'''

WEBPACK_CONFIG_JS_CONTENT = '''
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      inject: false,
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
};'''

SERVER_JS_CONTENT = '''const express = require('express');
const webpack = require('webpack');
const open = require('open');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = 8080;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!\n`);
  console.log(`Go to --> 127.0.0.1:${port}\n`);
  open(`http://127.0.0.1:${port}`);
});
'''

CSS_CONTENT = '''body{
  background-color: lightblue;
}
'''

README_CONTENT = f'''# {PROJECT_NAME.capitalize()}
  The Odin Project: {PROJECT_NAME.capitalize()}

  # Introduction

  In this project, I am creating and designing a {PROJECT_NAME} using html, javascript and css.

  # Demonstrated skills

  - git
  - html
  - css
  - javascript

  # Live Preview

  https://s3nsu1k4n.github.io/{PROJECT_NAME}/
'''

def create_folders() -> None:
  for folder in ['dist', 'src']:
    if not os.path.isdir(folder):
      os.mkdir(folder)


def create_gitignore() -> None:
  if not os.path.isfile('.gitignore'):
    with open('.gitignore', 'w') as fd:
      fd.write('node_modules')


def create_files() -> None:
  filenames = ['src/index.js', 'dist/index.html', 'webpack.config.js', 'server.js', 'README.md']
  for filename, content in zip(filenames, [INDEX_JS_CONTENT, INDEX_HTML_CONTENT, WEBPACK_CONFIG_JS_CONTENT, SERVER_JS_CONTENT, README_CONTENT]):
    if not os.path.isfile(filename):
      with open(filename, 'w') as fd:
        fd.write(content)
  

def create_css_file() -> None:
  folder = 'src/css'
  filename_css = 'style.css'
  filename_js = 'index.js'

  if not os.path.isdir(folder):
    os.makedirs(folder)
  
  filename = os.path.join(folder, filename_css)
  if not os.path.isfile(filename):
    with open(filename, 'w') as fd:
      fd.write(CSS_CONTENT)

  filename = os.path.join(folder, filename_js)
  if not os.path.isfile(filename):
    with open(filename, 'w') as fd:
      fd.write('import "./style.css"')


def setup_package_json() -> None:
  filename = 'package.json'
  content = ''
  with open(filename, 'r') as fd:
    content = fd.read()
  if content.find('gh-pages') == -1:
    json_content = json.loads(content)
    json_content['scripts'].update({'gh-pages': 'git subtree push --prefix dist origin gh-pages'})
    with open(filename, 'w') as fd:
      fd.write(json.dumps(json_content, indent=2))


def init_npm() -> None:
  os.system('npm init -y')  # create package.json

def install_webpack() -> None:
  os.system('npm install webpack webpack-cli --save-dev')  # create ./node_modules + package-lock.json

def install_style_and_css_loader() -> None:
  os.system('npm install --save-dev style-loader css-loader')

def install_express() -> None:
  os.system('npm install --save-dev html-webpack-plugin')
  os.system('npm install --save-dev webpack-dev-server')
  os.system('npm install --save-dev express webpack-dev-middleware')

def webpack() -> None:
  os.system('npx webpack')

def init_git() -> None:
  os.system('git init')

def create_files_and_folder():
  create_folders()
  create_files()
  create_gitignore()
  create_css_file()

def setup_webpack():
  init_npm()
  install_webpack()
  install_style_and_css_loader()
  install_express()
  webpack()

def main():
  init_git()
  create_files_and_folder()
  setup_webpack()
  setup_package_json()
  

if __name__ == '__main__':
  main()