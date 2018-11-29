import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/home'

class History extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>History Screen</Text>
            </View>
        );
    }
}

module.exports = History;
