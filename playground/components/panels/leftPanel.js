import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-360';
import { PanelHead, Btn_basic } from '../index.js';
  
class LeftPanel extends React.Component {
  constructor() {
    super();
    this.state = { 
        hover: false,
        cats :[ "blockchain", "Artificial Intelegence", "Extended Reality" ] 
    };
  }

  render() {
    const { cats } = this.state;
    return  <View style={styles.panel}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}>
               <Btn_basic 
                    type="primary" 
                    size="normal"
                    disabled = "false"
                    msg="Primary"
                  />
               <Btn_basic 
                    type="danger" 
                    size="large"
                    disabled = "false"
                    msg="danger"
                  />
               <Btn_basic 
                    type="info" 
                    size="small"
                    disabled = "false"
                    msg="info"
                  />
                
            </View>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default LeftPanel;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 300,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    greetingBox: {
      width :300,
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
    },
    greeting: {
      fontSize: 30,
    },
  });
  