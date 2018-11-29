/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  AlertIOS,
  ScrollView
} from 'react-native';

// import * as Animatable from 'react-native-animatable';
import D from '../styles/layout'
import {grey600,teal100} from '../styles/colors'
import Button from '../common/Button'




const window = D;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

class ItemInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    itemInfo = this.props.selected
    imageUrl = itemInfo.imageLocation.replace(/^http:\/\//i, 'https://');
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
     
        </View>

    );
  }

}

const styles = StyleSheet.create({
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30
  },
  priceSection: {
    alignSelf: 'flex-end',
    fontSize: 20,
    color: grey600,
    paddingRight: 20,
    paddingTop: 20
  },
  itemNameSection: {
    fontSize: 22,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 10
  },
  descriptionSection: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    color: '#90a4ae',
  },
  starRatingSection: {
    flexDirection: 'row',
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  starRatingStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  },
  spinnerSection: {
    alignSelf: 'flex-end',
    paddingRight: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // paddingTop: 100
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  loginButtonContainer: {
    backgroundColor: "#39B2B5",
    alignItems: "center",
    margin: 5,
    flex: 1/16
  },
  loginButton: {
    width: D.window.width * 0.9,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#39B2B5"
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },
  customHeaderBox: {
    // height: 150,
    padding: D.window.width / 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contain: {
    flex: 1,
    height: 150,
  },

});

module.exports = ItemInfo;
