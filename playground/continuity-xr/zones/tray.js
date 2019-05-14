import React from 'react';
import { connect } from 'react-redux';

import { AppRegistry, StyleSheet, Text, View,  } from 'react-360';

import { Hl , Btn_floating , Row, Clock, Switch,} from '../components';

class Tray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};   
  }
  
  componentDidMount() {
   
  }
  
  render() {
    const { viewMode, toggleTheme } = this.props;
    return <View>           
              <Clock />
              <Switch 
                viewMode = {viewMode}
                toggleTheme = {toggleTheme}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(Tray);



const styles = StyleSheet.create({
    panel: {
      // Fill the entire surface
      width: 1200,
      height: 350,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      opacity: .3,
      //    justifyContent: 'center',
      //alignItems: 'center',
    },
  });
  