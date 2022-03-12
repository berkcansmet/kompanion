/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { CacheManager } from '@georstat/react-native-image-cache';
import { Dirs } from 'react-native-file-access';

CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000
};

AppRegistry.registerComponent(appName, () => App);
