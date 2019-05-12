import React from './node_modules/react';
import {
    StyleSheet,
    View,
  } from './node_modules/react-360';
import { PanelHead, Btn_basic, Btn_floating } from '../index.js.js.js';
  
class LeftPanelSlim extends React.Component {
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
              <Btn_floating />
              <Btn_floating />
              <Btn_floating />
            </View>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default LeftPanelSlim;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 150,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  