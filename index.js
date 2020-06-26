/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
//import {App} from './src/app/app';
import App from './src/Reduxs/app';
import {name as appName} from './app.json';
if (__DEV__) {
  YellowBox.ignoreWarnings([
    'Remote debugger is in a background tab',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillReceiveProps has been',
    'Accessing view manager configs',
    'RCTRootView cancelTouches',
  ]);
}

AppRegistry.registerComponent(appName, () => App);
