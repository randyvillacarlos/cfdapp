import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/home'

class AboutUs extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>AboutUs Screen</Text>
            </View>
        );
    }
}

module.exports = AboutUs;
