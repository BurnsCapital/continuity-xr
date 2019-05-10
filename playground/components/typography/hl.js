import React from 'react';
import {
    Text,
    StyleSheet,
  } from 'react-360';

class Hl extends React.Component {
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
        return  <Text style={txt_style.hl}>
                         { msg }
                </Text>
                }

    styles() {
        let hue = {
            "blue": '#033C73',
            "indigo": '#6610f2',
            "purple": '#6f42c1',
            "pink": '#e83e8c',
            "red": '#C71C22',
            "orange": '#fd7e14',
            "yellow": '#DD5600',
            "green": '#73A839',
            "teal": '#20c997',
            "cyan": '#2FA4E7',
            "white": '#fff',
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

        // props
        let hl_font = (this.props.font) ? this.props.font : "roboto" ;
        let hl_color = (this.props.color) ? hue[this.props.color] : hue.cyan;
        let hl_weight = (this.props.bold) ? "bold" : "500";
        let hl_style = (this.props.italic) ? 'italic': 'normal' ;
        let hl_size;

        switch(this.props.size){
            case 'h2' :
                hl_size = 35;
                break;
            case 'h3' :
                hl_size = 30;
                break;
            case 'h4' :
                hl_size = 25;
                break;
            case 'h5' :
                hl_size = 20;
                break;
            case 'h6' :
                hl_size = 15;
                break;
            default:
                hl_size = 40;
        };

        const val = StyleSheet.create({
          hl: {
            fontWeight: hl_weight,
            lineHeight: 1.2,
            color: hl_color,
            fontSize: hl_size,
            fontFamily: hl_font,
            fontStyle: hl_style,
          },
                  
        });
        return val;
    }  
}   

export default Hl;

