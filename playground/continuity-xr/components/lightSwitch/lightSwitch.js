import React from 'react';
import { VrButton } from 'react-360';

const LightSwitch = (onClick, children) => {
     return <VrButton 
              onClick={onClick}
            >            
            {children}
            </VrButton>
      };
  


 
export default LightSwitch;

  
  
  