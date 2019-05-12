import React from 'react';

import {
    View,
    StyleSheet,
  } from 'react-360';


class Card extends React.Component {
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
        return  <View style={this.styles().card}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                 >
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
        let btn_moveX;
        let btn_moveY;

        
        //change transform  on hover
       // let btn_transform = (this.state.hover) ? [{ scale : 1.05 },{translateX: btn_moveX},{translateY: btn_moveY}] : [{translateX: btn_moveX},{translateY: btn_moveY}];
        
        let bg_color = (this.props.viewMode == 'DAY_MODE' ) ? hue.light : hue.dark;
        const val = StyleSheet.create({
              card : {
                width : 150,
                padding: 5,
                marginRight: 5,
                marginLeft: 5,
                marginTop:13,
                marginBottom: 13,
                backgroundColor : bg_color,
                opacity: .9,
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

export default Card;

