import React from 'react';
import { AppRegistry, StyleSheet, Text, View,} from 'react-360';
  
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
                    <Text style={styles.headText}>
                        Areas of Focus
                    </Text>
            </View>;
  }

}

export default PanelHead;

const styles = StyleSheet.create({
    headBox: {
      width :300,
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      borderColor: '#639dda',
      borderWidth: 0,
    },
    headText: {
      fontSize: 50,
    },
  });
  