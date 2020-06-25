/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import {App} from './src/app/app';
import App from './src/Reduxs/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
