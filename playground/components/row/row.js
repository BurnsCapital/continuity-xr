import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-360';

  import { Hl } from '../index';

class Row extends React.Component {
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
                        <Hl msg="test" />
                    </View>
                    <View style={this.styles().col_sm_2} >
                        <Hl msg="test" />
                    </View>
                    <View style={this.styles().col_sm_3} >
                        <Hl msg="test" />
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
                backgroundColor: '#000000',
                borderColor: '#639dda',
                borderWidth: 2,
                transform: [{translate: [ 5, 0, 0]} ],
            },
            col_sm_2: {
                width : 90,
                height : 90,
                padding: 5,
                backgroundColor: '#000000',
                borderColor: '#639dda',
                borderWidth: 2,
                transform: [{translate: [ 105, 90, 0]} ],
             },
            col_sm_3: {
                width : 90,
                height : 90,
                padding: 5,
                backgroundColor: '#000000',
                borderColor: '#639dda',
                borderWidth: 2,
                transform: [ {translate: [ 205, 180, 0]} ],
          },
        });
        return val;
    }  
}   

export default Row;

