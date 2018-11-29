'use strict';

import React, {
  Component
}                     from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView
}                     from 'react-native';
import AppRoutes      from './AppRoutes';
import Button         from './Button';
import Icon           from 'react-native-vector-icons/Ionicons';


const window    = Dimensions.get('window');

class SideMenuContent extends Component {
  constructor(props) {
    super(props);
  }

  handleNavButtonPress(event, route) {
    this.props.navigate(route);
  }

  renderSideMenuButtons() {
    const routes          = AppRoutes.getAllRoutes();
    const SideMenuButtons = routes.map((route) => {

      if(route.sidemenu) {
        return (
          <View
            style={styles.rowContent}
            key={route.id}>
            <Icon
              name={route.sidemenu.iconName}
              size={route.sidemenu.iconSize}
              color={'#fff'}
              style={styles.iconSpacer}
            />
            <Button
              style={[styles.navButton]}
              onPress={(e)=>this.handleNavButtonPress(e, {id : route.id})} >
              <Text style={styles.navButtonText}>
                {route.sidemenu.sideMenuButtonText}
              </Text>
            </Button>
          </View>
        );
      }
    });
    return SideMenuButtons;
  }

  render() {
    return (
      <ScrollView
        style={[{backgroundColor: this.props.backGndColor}, styles.container]}
        scrollsToTop={false}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              {`IC2 SideKick`}
            </Text>
          </View>
          <View style={styles.menusContainer}>
            {this.renderSideMenuButtons()}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

SideMenuContent.propTypes = {
  backGndColor: PropTypes.string
};

SideMenuContent.defaultProps = {
  backGndColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex:     1,
    padding:  5
  },
  headerContainer: {
    flex:               1,
    flexDirection:      'row',
    height:             40,
    marginTop:          20,
    borderBottomWidth:  0.5,
    backgroundColor:'transparent'

  },
  navButtonText: {
    color: '#fff',
    fontSize: 25,
    // fontWeight: 'bold',
    // opacity: 0.75
  },
  headerText: {
    // paddingTop:    5,
    paddingBottom: 5,
    paddingLeft:   2,
    paddingRight:  2,
    fontSize: 30,
    color: '#D4D4D4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menusContainer: {
    flex:           1,
    height:         window.height / 2,
    paddingTop:     5,
    paddingBottom:  5,
    flexDirection:  'column'
  },
  rowContent: {
    height:         50,
    flexDirection: 'row',
    alignItems:    'center'
  },
  iconSpacer: {
    paddingRight: 15,
    paddingLeft:  5,
    opacity: 0.75
  }
});

export default SideMenuContent;
