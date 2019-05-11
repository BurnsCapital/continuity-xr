import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    
  } from 'react-360';

  import { Btn_basic } from '../index';

class ButtonRow2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
        console.log(props);
      }
         
    componentWillUnmount() {
    }
 
    render() {
        return  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Btn_basic msg="test" type='primary' size='large'/>    
                        <Btn_basic msg="test" type='primary' size='large'/>          
                </View>
                }    
}   

export default ButtonRow2;

