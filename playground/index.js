import React from 'react';
import { AppRegistry } from 'react-360';

import * from './zones';

//pass through to app reg

AppRegistry.registerComponent('FrontZone', () => FrontZone);
AppRegistry.registerComponent('RightZone', () => RightZone);
AppRegistry.registerComponent('RearZone', () => RearZone);
AppRegistry.registerComponent('LeftZone', () => LeftZone);