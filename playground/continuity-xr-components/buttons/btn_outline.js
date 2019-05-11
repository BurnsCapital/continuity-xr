import React from 'react';
import {
    View,
    VrButton,
    Text,
    VrAnimated,
  } from 'react-360';
import { styles } from '../index';

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
        const btn_style = (this.state.hover) ? styles[btn_type.concat('_hover')] : styles[btn_type]; 
        return  <VrButton 
                    style={btn_style}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={this.handleClick}
                >
                    <Text style={styles.btn_text}>
                         { msg }
                    </Text>
                </VrButton>
    }

}

export default Btn_basic;