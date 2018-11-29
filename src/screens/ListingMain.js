import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import TextField from 'react-native-md-textinput';
import Button from '../common/Button'
import AppRoutes      from '../common/AppRoutes';
import D from '../styles/layout'
import StarRating from 'react-native-star-rating';

class ListingMain extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      name: '',
      password: ''
    };
  }

  render() {
    const listing = this.props.lists
    if(listing) {
      return (
        <View style={styles.imageBoxContainer}>
          <TouchableOpacity
            onPress={() => this.onPress(listing)}
          >
            <View style={styles.imageBox}>
              <Image
                source={{uri: listing.branchBanner}}
                style={{height: 200, width: windowWidth}}>
                <View style={styles.badge}>
                  <Text  style={styles.badgeText}>{listing.merchantAddress}</Text>
                </View>
              </Image>
            </View>
           </TouchableOpacity>
          <Image
            source={{uri: listing.merchantLogo}}
            style={styles.iconBadgeStyle}
          />
          <View style={styles.footerContainer}>
            <Text style={styles.footerTextContainer} numberOfLines={1} ellipsizeMode ={'tail'}>{listing.merchantName}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={3}
              starColor="#b2dfdb"
              disabled={true}
              starStyle={styles.starRatingStyle}
              starSize={20}
            />
          </View>
        </View>
      );
    } else {
      <ActivityIndicator/>
    }

  }
  onPress(listing) {
    this.props.navigate.push({
      id: 7,
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
    backgroundColor: "#80deea",
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
    justifyContent: 'flex-end'
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 14,
  },
  iconBadgeStyle: {
    borderRadius: 30,
    backgroundColor: '#009688',
    width: 60,
    height: 60,
    bottom: 0,
    left: 10,
    position: 'absolute',
  },
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 15
  },
  footerTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    color: '#90a4ae',
    marginLeft: 75,
    width: windowWidth / 2,
    fontSize: 14
  },
  starRatingStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  }

});

module.exports = ListingMain;
