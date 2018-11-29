import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    navBar: {
        backgroundColor: '#39B2B5',
    },
    scene: {
        flex: 1,
        paddingTop: 63,
    },
    leftNavButton : {
      // flex            : 1,
      flexDirection   : 'column',
      alignItems      : 'center',
      marginTop       : 4,
      paddingTop      : 0,
      paddingBottom   : 10,
      paddingLeft     : 15,
      paddingRight    : 15
    },
    rightNavButton : {
      flex            : 1,
      flexDirection   : 'column',
      alignItems      : 'center',
      marginTop       : 4,
      paddingTop      : 6,
      paddingBottom   : 10,
      paddingLeft     : 15,
      paddingRight    : 15
    },
    titleNavText : {
      marginTop   : 14,
      color       : '#ffffff',
      fontSize: 16,
      marginVertical: 10,
    }, 
    safeArea: {
        flex: 1,
        backgroundColor: '#689EB8'
    }
});
