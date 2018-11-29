import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from '../../styles/menu'
import AppRoutes      from '../../common/AppRoutes';


class StoreProfile extends Component {

    constructor(props) {
      super(props)
      this.state={

      }
    }


    render(){
      let route = AppRoutes.getRouteFromRouteId(8);
      let header = route.navbar;
      // header.navBarTitle=this.props.selected.first_name;
      return (
        <View style={styles.container}>
            <Text>Store Profile</Text>

        </View>
      );
    }
}

module.exports = StoreProfile;
