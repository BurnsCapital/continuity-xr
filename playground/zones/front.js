import React from 'react';
import { connect } from 'react-redux'
import { toggleLight } from '../actions'

import { AppRegistry, StyleSheet, Text, View, } from 'react-360';
import { Hl , Btn_floating , Row} from '../continuity-xr-components';
//import { LightSwitchContainer } from '../containers/lightSwitch';
//import { ModeFilters } from '../actions'

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };   
  }
  
  componentDidMount() {
    this.setState({ hover: false });
  }
  
  render() {
    const { viewMode, toggleTheme } = this.props;
    return <View > 
           <View style={styles.panel}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                >
            <Hl msg="Current Mode:" />
            <Hl msg={viewMode} />
            <Btn_floating 
              toggleTheme = {toggleTheme}
              viewMode = {viewMode}
            />
            </View>
            </View>;
  }
}


const mapStateToProps = state => {
  return {
    viewMode : state.viewMode
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme(){ 
            dispatch({type: 'TOGGLE_LIGHT'});
          }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Front);

const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 850,
      height: 750,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      transform: [{translateX: 25}],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  