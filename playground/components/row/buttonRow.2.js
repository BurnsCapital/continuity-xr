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
        const { msg } = this.props;
        return  <View style={this.styles().alertBox}>
                    <View style={this.styles().col_sm_1} >
                        <Btn_basic msg="test" type='primary' size='large'/>
                    </View>
                    <View style={this.styles().col_sm_2} >
                        <Btn_basic msg="test" type='primary' size='large'/>          
                    </View>
                </View>
                }

    styles() {
        //col sm width is 100
        let pos_x = (this.props.x) ? this.props.x : 0;
        let pos_y = (this.props.y) ? this.props.y : 0;
        const val = StyleSheet.create({
            col_sm_1: {
                width : 90,
                height : 90,
                padding: 5,
                transform: [{translate: [ 0, 0, 0]} ],
            },
            col_sm_2: {
                width : 90,
                height : 90,
                padding: 5,
                transform: [{translate: [ 152, 90, 0]} ],
             },
            
        });
        return val;
    }  
}   

export default ButtonRow2;

