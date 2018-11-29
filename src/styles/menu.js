import { StyleSheet } from 'react-native';

import D from '../styles/layout'

const WIDTH_PERCENTAGE = D.window.width * (100/100);
const COLUMNS = 2;
const MARGIN = D.window.width * (1/100);;
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

module.exports = StyleSheet.create({
  container: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      top: 70
  },
  gridStyle: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  gridCell: {
    marginLeft: MARGIN,
    marginTop: 40,
    width: WIDTH_PERCENTAGE / COLUMNS - SPACING
  },
  menuItem: {
      color: '#333',
      padding: 10,
      textAlign: 'left'
  }
});
