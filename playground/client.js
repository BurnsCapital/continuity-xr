// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  // create zones 
  //main zones
  const frontZone = new Surface(900, 600, Surface.SurfaceShape.Cylinder);
  frontZone.setAngle(0, 0);

  const rightZone = new Surface(900, 600, Surface.SurfaceShape.Cylinder);
  rightZone.setAngle(1, 0);
  
  const rearZone = new Surface(900, 600, Surface.SurfaceShape.Cylinder);
  rearZone.setAngle(1.5, 0);
  
  const leftZone = new Surface(900, 600, Surface.SurfaceShape.Cylinder);
  leftZone.setAngle(-1, 0);
  //create half face zones
  
  //render everything to zones
  r360.renderToSurface( r360.createRoot('FrontZone'), frontZone,);
  r360.renderToSurface( r360.createRoot('RightZone'), rightZone,);
  r360.renderToSurface( r360.createRoot('RearZone'), rearZone,);
  r360.renderToSurface( r360.createRoot('LeftZone'), leftZone,);
  
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('office360.jpg'));
}

window.React360 = {init};
