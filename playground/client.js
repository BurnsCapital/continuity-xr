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
  
  //user tray
  const trayZone = new Surface(1200, 350, Surface.SurfaceShape.Flat);
  trayZone.setAngle(0, -Math.PI / 6);
  
  //main zones
  const frontZone = new Surface(900, 750, Surface.SurfaceShape.Cylinder);
  frontZone.setAngle(0, 0);

  const rightZone = new Surface(900, 750, Surface.SurfaceShape.Flat);
  rightZone.setAngle( Math.PI / 2 , 0);
  
  const rearZone = new Surface(900, 750, Surface.SurfaceShape.Flat);
  rearZone.setAngle(Math.PI, 0);
  
  const leftZone = new Surface(900, 750, Surface.SurfaceShape.Flat);
  leftZone.setAngle( -Math.PI / 2, 0);
  
  //create half face zones
  
  //render everything to zones
  
  r360.renderToSurface( r360.createRoot('FrontZone',{ }), frontZone,);
  r360.renderToSurface( r360.createRoot('RightZone',{ }), rightZone, );
  r360.renderToSurface( r360.createRoot('RearZone',{ }), rearZone,);
  r360.renderToSurface( r360.createRoot('LeftZone',{ }), leftZone,);
  r360.renderToSurface( r360.createRoot('TrayZone',{ }), trayZone,);

  //recenter the floating tray
  setInterval(()=> {
    const cameraQuat = r360.getCameraQuaternion();
    trayZone.recenter(cameraQuat, 'yaw');
   },100);

   
   // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('office360.jpg'));
}

window.React360 = {init};
