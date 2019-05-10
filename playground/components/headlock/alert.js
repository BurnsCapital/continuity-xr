import React from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-360';

class Alert extends React.Component {
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
        const txt_style = this.styles(); 
        return  <View style={this.styles().alertBox}>
                <Text >
                         { msg }
                </Text>
                </View>
                }

    styles() {
        let pos_x = (this.props.x) ? this.props.x : 0;
        let pos_y = (this.props.y) ? this.props.y : 0;
        const val = StyleSheet.create({
            alertBox: {
                width : 100,
                padding: 20,
                backgroundColor: '#000000',
                borderColor: '#639dda',
                borderWidth: 2,
                transform: [{translate: [ pos_x, pos_y, 0]} ],
          },
        });
        return val;
    }  
}   

export default Alert;

