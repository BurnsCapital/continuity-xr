import React from 'react';

import {
    VrButton,
    Text,
    StyleSheet,
    View,
    Environment,
  } from 'react-360';



class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            isOn: true,
        };
      }
         
    componentWillUnmount() {
    }

    handleClick() {
        this.setState({isOn: !this.state.isOn }) 
        this.props.toggleTheme();
      }

    render() {
        const { btn_type, onMsg, offMsg } = this.props;
        const btn_style = this.styles(); 
        return  <View  style={{   
                    width: 90,
                    height: 60,
                    borderRadius: 32,
                    padding: 4,
                    opacity: .7,
                    backgroundColor: this.state.isOn
                    ? "lightblue"
                    : "gray",
                    }}>
                <VrButton 
                    style={btn_style.btn}
                    onClick={() => this.handleClick()}
                >
                {this.props.children}
                <Text style={btn_style.isOn_txt}>
                    { (this.state.isOn) ? onMsg : offMsg} 
                 </Text>
                </VrButton>
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
        let btn_transform = [{translateX: this.state.isOn ? 32 : 0}] ;
        //change text color if disabled
        let txt_hue = (this.props.viewMode == 'DAY_MODE' ) ? hue.light : hue.dark ;
        let bg_color = (this.props.viewMode == 'DAY_MODE' ) ? hue.primary : hue.secondary;
        
        const val = StyleSheet.create({
            isOn_txt :{
                color : txt_hue,
                fontWeight: 'bold',
                fontSize: txt_size,
                textAlign: 'center',
                lineHeight : 70,   
            },
              btn : {
                borderRadius: 32,
                width : btn_width,
                height : btn_height,
                backgroundColor : bg_color,
                opacity: 1,
                shadowOffset : {width: 6, height: 10},
                shadowColor : hue.dark,
                shadowRadius : 20,
                shadowOpacity : 1,
                transform:  btn_transform,
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default Switch;

