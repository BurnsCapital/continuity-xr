import React from 'react';
import {StyleSheet } from 'react-360';


//define colors
var hue = {
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


const styles = StyleSheet.create({
//Typography
  h1: {
    fontWeight: "500",
    lineHeight: 1.2,
    color: hue.cyan,
    fontSize: 40,
  },
  h2: {
      fontWeight: "500",
      lineHeight: 1.2,
      color: hue.cyan,
      fontSize: 35,
    },
  h3: {
      fontWeight: "500",
      lineHeight: 1.2,
      color: hue.cyan,
      fontSize: 30,
    },
  h4: {
      fontWeight: "500",
      lineHeight: 1.2,
      color: hue.cyan,
      fontSize: 25,
    },
  h5: {
      fontWeight: "500",
      lineHeight: 1.2,
      color: hue.cyan,
      fontSize: 20,
    },
  h6: {
      fontWeight: "500",
      lineHeight: 1.2,
      color: hue.cyan,
      fontSize: 15,
    },
  italic :{
    fontStyle :'italic',
  },
  bold :{
    fontWeight: 'bold',
  },
//font emphisis
  textPrimary : {
    color : hue.primary,
  },
  textSecondary : {
    color : hue.secondary,
  },
  textSuccess : {
    color : hue.success,
  },
  textInfo : {
    color : hue.info,
  },
  textWarning : {
    color : hue.warning,
  },
  textDanger : {
    color : hue.danger,
  },

  //button styles
  btn_text :{
    color : hue.light,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    borderColor : hue.grayDark,
    borderWidth : 5,
  },
  btn_text_disabled :{
    color : hue.light,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  btn_primary : {
    width : 100,
    height : 30,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.primary,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_primary_hover : {
    width : 110,
    height : 35,
    borderColor : hue.grayDark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.primary,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_secondary : {
    width : 100,
    height : 30,
    borderColor : hue.light,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.secondary,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_secondary_hover : {
    width : 110,
    height : 35,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.secondary,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_success : {
    width : 100,
    height : 30,
    borderColor : hue.light,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.success,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_success_hover : {
    width : 110,
    height : 35,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.success,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_info : {
    width : 100,
    height : 30,
    borderColor : hue.light,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.info,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_info_hover : {
    width : 110,
    height : 35,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.info,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_warning : {
    width : 100,
    height : 30,
    borderColor : hue.light,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.warning,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_warning_hover : {
    width : 110,
    height : 35,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.warning,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_danger : {
    width : 100,
    height : 30,
    borderColor : hue.light,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.danger,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  btn_danger_hover : {
    width : 110,
    height : 35,
    borderColor : hue.dark,
    borderWidth : 1,
    borderRadius: 5,
    backgroundColor : hue.danger,
    shadowOffset : {width: 0, height: 6},
    shadowColor : hue.dark,
    shadowOpacity : .5,
    transform: [{ rotateX : '20deg' },
                { translateY: 4}
              ],
    overflow : 'hidden',
  },
  //outlines have to have a text that matches
  btn_Outline_Primary : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : hue.primary,
    backgroundColor : hue.light,
  },
  btn_outline_primary_text : {
    color : hue.primary,
    fontSize: 20,
    textAlign: 'center',
  },

  btn_outline_secondary : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : hue.secondary,
    backgroundColor : hue.light,
  },
  btn_outline_secondary_text : {
    color : hue.secondary,
    fontSize: 20,
    textAlign: 'center',
  },

  btn_outline_success : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : hue.success,
    backgroundColor : hue.light,
  },
  btn_outline_success_text : {
    color : hue.success,
    fontSize: 20,
    textAlign: 'center',
  },

  btn_outline_info : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : hue.info,
    backgroundColor : hue.light,
  },
  btn_outline_info_text : {
    color : hue.info,
    fontSize: 20,
    textAlign: 'center',
  },

  btn_outline_warning : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : hue.warning,
    backgroundColor : hue.light,
  },
  btn_outline_warning_text : {
    color : hue.warning,
    fontSize: 20,
    textAlign: 'center',
  },

  btn_outline_danger : {
    width : 100,
    height : 30,
    borderRadius: 5,
    borderWidth: 2, 
    borderColor : hue.danger,
    backgroundColor : hue.light,
  },
  btn_outline_danger_text : {
    color : hue.danger,
    fontSize: 20,
    textAlign: 'center',
  },
});


export default styles;
      