import React from 'react';
import { AppRegistry } from 'react-360';

import { Tray,
         Front,
         FrontRight,
         Right,
         RearRight,
         Rear,
         RearLeft,
         Left,
         FrontLeft
        } from './zones';

//pass through to app reg
AppRegistry.registerComponent('TrayZone', () => Tray);

AppRegistry.registerComponent('FrontZone', () => Front);
AppRegistry.registerComponent('RightZone', () => Right);
AppRegistry.registerComponent('RearZone', () => Rear);
AppRegistry.registerComponent('LeftZone', () => Left);