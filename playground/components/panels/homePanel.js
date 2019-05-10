import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';

import { Hl , ButtonRow2, Row} from '../index';

class HomePanel extends React.Component {
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
                    <Hl msg='headline h1' size='h1' />
                    <Hl msg= "Headline h2" size='h2' />
                    <Hl msg='headline h3' size='h3' />
                    <Hl msg='headline h4' size='h4' />
                    <Hl msg='headline h5' size='h5' />
                    <Hl msg='headline h6' size='h6' />
                    <Hl msg='headline italic' italic='true' />
                    <Row />
                    <ButtonRow2 />
            </View>
            </View>;
  }

  
}

export default HomePanel;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 300,
      height: 600,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
//      justifyContent: 'center',
      //alignItems: 'center',
    },
    greetingBox: {
     
    },
    greeting: {
      fontSize: 30,
    },
  });
  