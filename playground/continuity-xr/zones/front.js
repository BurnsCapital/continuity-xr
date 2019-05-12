import React from 'react';
import { connect } from 'react-redux'
import { toggleLight } from '../actions'

import { Image, StyleSheet, Text, View, asset } from 'react-360';
import { Hl , Btn_floating , Card, Row} from '../components';

class Front extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hover: false,
   };
     
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
              <Card viewMode = {viewMode}>
                <Image source={asset('Cody.jpg')} style={styles.image}/>
                <Hl msg="Current Mode:" />
                <Hl msg={viewMode} />
                <Btn_floating 
                  viewMode = {viewMode}
                  toggleTheme = {toggleTheme}
                  />
               </Card>
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
    image : {
      flexGrow: 1,
      flexBasis: 5,
    },
    panel: {
      // Fill the entire surface
      width: 850,
      height: 750,
      backgroundColor: 'rgba(255, 255, 255, .3)',
      transform: [{translateX: 25}],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  