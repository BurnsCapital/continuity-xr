import React from 'react';

import {
    VrButton,
    Text,
    StyleSheet,
  } from 'react-360';


class Btn_floating extends React.Component {
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
    handleClick() {
        this.props.toggleTheme();
        console.log(this.props.viewMode);
    }

    render() {
        const { btn_type, msg } = this.props;
        const btn_style = this.styles(); 
        return  <VrButton 
                    style={btn_style.btn}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={() => this.handleClick()}
                >
                    {this.props.children}
                     <Text style={btn_style.btn_text}>
                         { msg } 
                    </Text>
                </VrButton>
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
        let txt_size;  
        let btn_width;
        let btn_height;
        let btn_moveX;
        let btn_moveY;

        //alow button to be sized and change on hover
        switch(this.props.size){
            case 'small':
                txt_size = 25;
                btn_width = 35; 
                btn_height = 35;
                btn_moveX = 0;
                btn_moveY = -17.5; 
                break;
            case 'large':
                txt_size = 50;
                btn_width = 70; 
                btn_height = 70;
                btn_moveX = 0;
                btn_moveY = -35;
                break;
            default: 
                txt_size = 35;
                btn_width = 50; 
                btn_height = 50;
                btn_moveX = 0;
                btn_moveY = -25;
        };

        //change transform  on hover
        let btn_transform = (this.state.hover) ? [{ scale : 1.05 },{translateX: btn_moveX},{translateY: btn_moveY}] : [{translateX: btn_moveX},{translateY: btn_moveY}];
        //change text color if disabled
        let txt_hue = (this.props.viewMode == 'DAY_MODE' ) ? hue.light : hue.dark ;

        let bg_color = (this.props.viewMode == 'DAY_MODE' ) ? hue.primary : hue.secondary;
        const val = StyleSheet.create({
            btn_text :{
                color : txt_hue,
                fontWeight: 'bold',
                fontSize: txt_size,
                textAlign: 'center',
                lineHeight : 70,    
            },
              btn : {
                borderRadius: 50,
                width : btn_width,
                height : btn_height,
                backgroundColor : bg_color,
                opacity: .9,
                shadowOffset : {width: 6, height: 10},
                shadowColor : hue.dark,
                shadowRadius : 20,
                shadowOpacity : .9,
                transform: btn_transform,
               
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default Btn_floating;

