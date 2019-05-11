import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';

import { Hl , Btn_floating , Row} from '../continuity-xr-components';

class Tray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};   
  }
  
  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
  
  render() {
    return <View> 
           <View style={styles.panel}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}>
            
            </View>
            </View>;
  }

  
}

export default Tray;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 1200,
      height: 350,
      backgroundColor: 'rgba(255, 255, 0, 1)',
      //    justifyContent: 'center',
      //alignItems: 'center',
    },
  });
  