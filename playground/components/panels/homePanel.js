import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';
  
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
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        {this.state.hover
                         ? "Home panel has loaded!"
                         : "Not hovering"
                         }
                    </Text>
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
  