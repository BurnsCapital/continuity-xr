import React from 'react';
import { connect } from 'react-redux'
import { toggleLight } from '../actions'

import { Pano, StyleSheet, Text, View, asset, LiveEnvCamera } from 'react-360';
import { Hl , Btn_floating , Card, CardContainer} from '../components';

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
              <Pano>
                <LiveEnvCamera  />
              </Pano>
            
              <CardContainer>
                <Card viewMode = {viewMode}>      
                  <Hl size="h6"  msg="Current Mode:" />
                  <Hl size="h6"  msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 <Card viewMode = {viewMode}>      
                  <Hl size="h6"  msg="Current Mode:" />
                  <Hl size="h6"  msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 <Card viewMode = {viewMode}>      
                  <Hl size="h6"  msg="Current Mode:" />
                  <Hl size="h6"  msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 <Card viewMode = {viewMode}>      
                  <Hl size="h6" msg="Current Mode:" />
                  <Hl size="h6" msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 
                 <Card viewMode = {viewMode}>      
                  <Hl  size="h6" msg="Current Mode:" />
                  <Hl  size="h6" msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 <Card viewMode = {viewMode}>      
                  <Hl size="h6"  msg="Current Mode:" />
                  <Hl size="h6"  msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
                 <Card viewMode = {viewMode}>      
                  <Hl size="h6" msg="Current Mode:" />
                  <Hl size="h6" msg={viewMode} />
                  <Btn_floating 
                    viewMode = {viewMode}
                    toggleTheme = {toggleTheme}
                    />
                 </Card>
               </CardContainer>
              </View>
            </View>;
  }
}
//boneyard
//<Image source={asset('Cody.jpg')} style={styles.image}/>

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
      backgroundColor: 'rgba(255, 255, 255, .05)',
      transform: [{translateX: 25}],
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
  