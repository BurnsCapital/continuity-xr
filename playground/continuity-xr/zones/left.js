import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';

import { Hl , Btn_floating , Row} from '../components';

class Left extends React.Component {
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

export default Left;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 850,
      height: 300,
      backgroundColor: 'rgba(0, 255, 0, 1)',
      transform: [{translateX: 25}],
      //    justifyContent: 'center',
      //alignItems: 'center',
    },
  });
  