// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
 
  // create panels 
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-0.6, 0);

  const homePanel = new Surface(300, 600, Surface.SurfaceShape.Cylinder);
  homePanel.setAngle(0, 0);

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.6, 0);

  r360.renderToSurface(
    r360.createRoot('LeftPanel'),
    leftPanel,
  );
  
  r360.renderToSurface(
    r360.createRoot('RightPanel'),
    rightPanel,
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('HomePanel', 
    { /* initial props */ }),
    homePanel,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('office360.jpg'));
}

window.React360 = {init};
