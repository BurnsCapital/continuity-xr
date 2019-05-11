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
        return  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  {this.props.children}
                </View>
                }
   
}   

export default Row;

