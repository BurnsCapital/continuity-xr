import React from 'react';
import {
    View,
    VrButton,
  } from 'react-360';
import { styles, Btn_basic } from '../index';

class PanelHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hover: false, 
    };
  }

  render() {
    const { cats } = this.state;
    return  <View style={styles.headBox}>
                  <Btn_basic 
                    btn_type="btn_primary" 
                    msg="Primary"
                  />
                  <Btn_basic 
                    btn_type="btn_secondary" 
                    msg="Secondary"
                  />
                  <Btn_basic 
                    btn_type="btn_success" 
                    msg="Success"
                  />
                  <Btn_basic 
                    btn_type="btn_info" 
                    msg="Info"
                  />
                  <Btn_basic 
                    btn_type="btn_warning" 
                    msg="Warning"
                  />
                  <Btn_basic 
                    btn_type="btn_danger" 
                    msg="Danger"
                  />
            </View>;
  }

}

export default PanelHead;