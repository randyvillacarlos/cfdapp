import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Text, Dimensions, AsyncStorage, AlertIOS, Alert, Platform } from 'react-native';

import TextField from 'react-native-md-textinput';
import Modal from 'react-native-modal'
import Button from '../common/Button'
import RoundedButton from '../common/RoundedButton'
import Load from "react-native-loading-gif";
import {green01, white} from "../styles/colors"
import Icon   from 'react-native-vector-icons/Ionicons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      name: null,
      password: null
    };
    this.state = {
      isModalVisible: false,
      userInfo: null
    }
  }

  _logIn(data) {

    this.props.navigator.push({
      id: 1,
    })

  }

  _submitForm() {
    if(!this.inputs.name || !this.inputs.password) {
      console.log("There are missing fields");

      Alert.alert(
        'Error',
        'All fields are mandatory.'
      );

    } else {
      this._logIn(this.inputs);
    }
  }

  _forgetPassword() {
    this.setState({ isModalVisible: null })
    // call forget pwd action
  }

  _showModal() {
    this.setState({ isModalVisible: true })
  }

  _hideModal() {
    this.setState({ isModalVisible: false })
  }

  _renderResetPwdButton(text, onPress) {

    return (
      <Button
        onPress={onPress}
        textStyle={{color: '#e0f7fa'}}
        style={styles.loginButton}
      >
        {text}
      </Button>
    )
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <View style={styles.imageBoxContainer}>
          <View style={styles.imageBox}>
          </View>
        </View>
        <TextField
          label={'Username'}
          labelColor={'#ffffff'}
          textColor={'#ffffff'}
          highlightColor={'#ffffff'}
          autoCapitalize= "none"
          selectionColor='#ffffff'
          autoFocus={false}
          returnKeyType="next"
          onSubmitEditing={() => this._passwordRef.focus()}
          onChangeText={(text) => {
            this.inputs.name = text;
          }}
        />
        <TextField
          ref={(ref) => this._passwordRef = ref}
          label={'Password'}
          highlightColor={'#009688'}
          autoCapitalize= "none"
          selectionColor='#00b8d4'
          secureTextEntry={true}
          returnKeyType="go"
          onSubmitEditing={() => this._submitForm()}
          onChangeText={(text) => {
            this.inputs.password = text;
          }}
        />
        <View style={styles.loginButtonContainer}>
          <RoundedButton
            text="Login"
            textColor={green01}
            background={white}
            handleOnPress={this._logIn}
          />
          <RoundedButton
            text="Create Account"
            textColor={white}
            handleOnPress={this.onCreateAccountPress}
          />        
        </View>
        <View style={styles.buttonLinkContainer}>
          <Button
            onPress={() => this._showModal()}
            textStyle={styles.buttonTextLinkStyle}
          >
            {`Forget Password`}
          </Button>
          <Text style={styles.buttonTextLinkStyle}>{` | `}</Text>
          <Button
            onPress={() => this._submitForm()}
            textStyle={styles.buttonTextLinkStyle}
          >
            {`Register User`}
          </Button>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          hideOnBack={true}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={1000}
          onModalHide={() => this._hideModal()}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
        >
          <View style={styles.modalContainer}>
            <TextField
              label={'Username'}
              highlightColor={'#009688'}
              autoCapitalize= "none"
              textColor="#e0f2f1"
              selectionColor='#00b8d4'
              autoFocus={false}
              value={!this.inputs.name ? '' : this.inputs.name}
              returnKeyType="next"
              onSubmitEditing={() => this._forgetPassword()}
              onChangeText={(text) => {
                this.inputs.name = text;
              }}
            />
            {this._renderResetPwdButton('Send', () => this._forgetPassword())}
          </View>
        </Modal>
        <Load Image={8} ref="Load" showLoadingTxt={true} bgColor="#FFFFFF" isShow={false}></Load>
      </ScrollView>
    );
  }
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#9DDAD2',
    backgroundColor: '#689EB8',
    paddingTop: 50,
    marginLeft: 10,
    marginRight: 10
  },
  loginButtonContainer: {
    marginTop: 15,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLinkContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextLinkStyle: {
    color: '#78909c'
  },
  loginButton: {
    width: windowWidth * 0.9,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#39B2B5"
  },
  imageBoxContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  imageBox: {
    backgroundColor: "#000000",
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#333'
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: windowWidth / 2
  }
});

module.exports = Login;
