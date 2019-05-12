import React from 'react';

import {
    View,
    StyleSheet,
  } from 'react-360';


class CardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hover: false, 
        };
      }
         
    componentWillUnmount() {
        if (this.animationFrame) {
            window.cancelAnimationFrame(this.animationFrame);
        }
    }
 
    render() {
        return  <View style={this.styles().cardContainer}>
                    {this.props.children}
                </View>
    }

    styles() {
        let hue = {
            "gray": '#868e96',
            "grayDark": '#343a40',
            "primary": '#2FA4E7',
            "secondary": '#e9ecef',
            "success": '#73A839',
            "info": '#033C73',
            "warning": '#DD5600',
            "danger": '#C71C22',
            "light": '#f8f9fa',
            "dark": '#343a40',
          };  
        
        //change transform  on hover
       // let btn_transform = (this.state.hover) ? [{ scale : 1.05 },{translateX: btn_moveX},{translateY: btn_moveY}] : [{translateX: btn_moveX},{translateY: btn_moveY}];
        
        let bg_color = (this.props.viewMode == 'DAY_MODE' ) ? hue.light : hue.dark;
        const val = StyleSheet.create({
              cardContainer : {
                flex: 1,
                alignItems: 'flex-start',
                justifyContent : 'space-around',
                flexDirection:'row',
                flexWrap: 'wrap', 
                width : 420,
                height: 700,
                backgroundColor : 'transparent',
                opacity: 1,
                shadowOffset : {width: 6, height: 10},
                shadowColor : hue.dark,
                shadowRadius : 20,
                shadowOpacity : .9,
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default CardContainer;

