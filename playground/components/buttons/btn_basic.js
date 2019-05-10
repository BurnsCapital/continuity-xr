import React from 'react';
import {
    VrButton,
    Text,
    StyleSheet,
  } from 'react-360';

class Btn_basic extends React.Component {
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
        const { btn_type, msg } = this.props;
        const btn_style = this.styles(); 
        return  <VrButton 
                    style={btn_style.btn}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={this.handleClick}
                >
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
        //set bg color to type
        let bg_color = hue[this.props.type];

        //alow button to be sized and change on hover
        switch(this.props.size){
            case 'small':
                txt_size = 12;
                btn_width = 83; 
                btn_height = 25;
                break;
            case 'large':
                txt_size = 25;
                btn_width = 133; 
                btn_height = 40;
                break;
            default: 
                txt_size = 20;
                btn_width = 100; 
                btn_height = 30;
        };
        //change border on hover
        let btn_border = (this.state.hover) ? hue.light : hue.dark;
        
        //change text color if disabled
        let txt_hue = (this.props.disabled) ? hue.light : hue.dark ;

        const val = StyleSheet.create({
            btn_text :{
                color : txt_hue,
                fontWeight: 'bold',
                fontSize: txt_size,
                textAlign: 'center',
                borderColor : hue.light,
                borderWidth : 5,
              },
              btn : {
                width : btn_width,
                height : btn_height,
                borderColor : btn_border,
                borderWidth : 1,
                borderRadius: 5,
                backgroundColor : bg_color,
                opacity: .85,
                shadowOffset : {width: 0, height: 6},
                shadowColor : hue.dark,
                shadowOpacity : .5,
                transform: [{ rotateX : 20 },
                            { translateY: 4}
                          ],
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default Btn_basic;

