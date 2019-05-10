import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';

import { Hl } from '../index';

class HomePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};   
  }
  
  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
  
  render() {
    return  <View style={styles.panel}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}>
                    <Hl 
                    msg='hello world h2'
                    size='h2'
                    color='blue'
                    bold='false'
                    italic='false'
                    />
                    <Hl 
                    msg='hello world h4'
                    size='h4'
                    color='primary'
                    bold='true'
                    italic='false'
                    />
                    <Hl 
                    msg='hello world h2'
                    size='h2'
                    color='danger'
                    bold='false'
                    italic='true'
                    />
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    greetingBox: {
      padding: 20,
      backgroundColor: '#000000',
      borderColor: '#639dda',
      borderWidth: 2,
    },
    greeting: {
      fontSize: 30,
    },
  });
  