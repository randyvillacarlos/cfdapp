import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/home'

class Profile extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}

module.exports = Profile;
