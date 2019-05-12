import React from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-360';

import { Hl , Btn_floating , Row, LightSwitch} from '../index';

import { modeView } from '../../containers';
import { ModeFilters } from '../../actions'

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
                    <Row>
                      <Btn_floating >
                      </Btn_floating> 
                      <modeView filter={ModeFilters.NIGHT_MODE}></modeView>
                      <Btn_floating size='large' color='info' />
                      <Btn_floating msg='1' size='small' />
                    </Row>
            
            </View>
            </View>;
  }

  
}

export default HomePanel;

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 850,
      height: 300,
      backgroundColor: 'rgba(255, 0, 0, 1)',
      transform: [{translateX: 25}],
      //    justifyContent: 'center',
      //alignItems: 'center',
    },
  });
  