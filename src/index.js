import React from 'react'
import {render} from 'react-dom'
import AppService from './modules/app.service'
import {config} from './modules/config'
import App from './App'
import './modules/ts.module'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
import './sass/index.sass'

const namespace = process.env.NAMESPACE;
const assetPrefixForNamespace = (namespace) => {
  switch (namespace) {
    case 'prod':
      return 'dist/';
    case 'dev':
      return 'src/';
    default:
      return '';
  }
};
__webpack_public_path__ = `${assetPrefixForNamespace(namespace)}/`;

console.log('Config key:', config.key)

const service = new AppService('Hello world!')
service.log()

render(<App />, document.getElementById('app')) 