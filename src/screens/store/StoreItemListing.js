import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Button from '../../common/Button'
import {grey600,teal200} from '../../styles/colors'
import D from '../../styles/layout'

class StoreItemListing extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      name: '',
      password: ''
    };
  }

  render() {
    const listing = this.props.lists
    url = listing.imageLocation.replace(/^http:\/\//i, 'https://');
    return (
      <View style={styles.imageBoxContainer}>
        <TouchableOpacity
          onPress={() => this.onPress(listing)}
        >
          <View style={styles.imageBox}>
            <Image
              source={{uri:url}}
              resizeMode='contain'
              style={{flex:1, height: 200, width: windowWidth}}>
              <View style={styles.badge}>

                <Text style={styles.badgeText}>{listing.name}</Text>
              </View>
            </Image>
          </View>
         </TouchableOpacity>
      </View>
    );
  }
  onPress(listing) {
    this.props.navigate.push({
      id: 10,
      selected: listing
    })
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
}

const windowWidth = D.window.width;
const windowHeight = D.window.height;

const styles = StyleSheet.create({
  imageBoxContainer: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    alignItems: "center"
  },
  imageBox: {
    marginTop: 10,
    // backgroundColor: "#80deea",
    width: windowWidth,
    height: 200
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,.65)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: windowWidth,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 14,
  },
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flex: 1
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    color: '#90a4ae',
    paddingLeft: 20,
    fontSize: 14
  },
  starRatingStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  }
});

module.exports = StoreItemListing;
