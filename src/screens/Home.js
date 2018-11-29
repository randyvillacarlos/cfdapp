import React, { Component } from 'react';
import { ScrollView, SafeAreaView, ListView, Text, TouchableOpacity,AsyncStorage } from 'react-native';

import styles from '../styles/home'



var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

class Home extends Component {

    constructor(props) {
      super(props);
      state={
        listings: [],
        latitude: null,
        longitude: null,
        error: null,
      }

      this.state = {
        peopleDataSource: [],
      }
    }


    render(){
      return (
        <ScrollView style={styles.container}>
          <Text>Home Screen</Text>
        </ScrollView>
      )

    }
}

module.exports = Home;
