import React from 'react';
import { AppRegistry,LiveEnvCamera } from 'react-360';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './continuity-xr/reducers'

import { Tray, Front, FrontRight, Right, RearRight, Rear, RearLeft, Left, FrontLeft   } from './continuity-xr/zones';

const store = createStore(rootReducer);

const FrontView = () =>
    <Provider store={store}>
         
        <Front />
    </Provider>


//pass through to app reg

AppRegistry.registerComponent('TrayZone', () => Tray);
AppRegistry.registerComponent('FrontZone', () => FrontView);
AppRegistry.registerComponent('RightZone', () => Right);
AppRegistry.registerComponent('RearZone', () => Rear);
AppRegistry.registerComponent('LeftZone', () => Left);
