/**
 * Created by jonas on 14.03.17.
 */
import React from 'react';
import {Button, Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

export default function Overview({openAnyline, checkCameraPermissionAndOpen, disabled}) {

  const platformPermissionCheck = (Platform.OS === 'android') ? checkCameraPermissionAndOpen : openAnyline;

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>OTHER</Text>
        <View style={styles.buttons}>
          <Button style={styles.buttons} title={'  MRZ Scanner'} color="#0099FF"
                  disabled={disabled}
                  onPress={() => {
                    platformPermissionCheck('MRZ')
                  }}/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#303030',
    marginTop: '40%',
    marginBottom: '20%'
  },
  buttons: {
    margin: 5
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25
  }

});