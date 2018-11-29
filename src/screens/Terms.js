import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/home'

class Terms extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Terms Screen</Text>
            </View>
        );
    }
}

module.exports = Terms;
