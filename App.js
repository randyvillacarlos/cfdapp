/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  AlertIOS
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import AnylineOCR from 'anyline-ocr-react-native-module';
import MRZConfig from './config/MRZConfig';
import Result from './Result';
import Overview from './Overview';

console.disableYellowBox = true;
type Props = {};
let hubConnection = null;
let senderName = 'CFD_DEVICE_iPhoneX';
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      connected: true,
      hasScanned: false,
      result: '',
      imagePath: '',
      fullImagePath: '',
      currentScanMode: '',
      buttonsDisabled: false,
      SDKVersion: '',      
    }
  }

  componentDidMount = async () => {
    const SDKVersion = await AnylineOCR.getSDKVersion().then((data) =>{
      console.log('fuckin, ', data)
    }).catch((err) => {
      console.log('error, ' , err)
    });
    this.setState({SDKVersion: SDKVersion});
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  connectHub(data) { 

    // let qs = "groupName=13040&sender=CFD_DEVICE_1";
    // let url = "https://icgmb20181010024209.azurewebsites.net/chat";
    // let fullUrl = url+ "?" + qs;

    let sender = '&sender=CFD_DEVICE_iPhoneX';
    let fullUrl = data+sender;
    alert(fullUrl);
    hubConnection = new HubConnectionBuilder().withUrl(fullUrl).build();
    hubConnection.start().then(()=>{
      console.log('connected')
      this.setState({connected: true})
    }).catch(error => {
      console.log('connect fail', error)
      AlertIOS.alert(
        'Hub Connection Error',
        errorMessage
       );
    })

    hubConnection.on('receive', (data: any) => {
      console.log('message', data);
      let parsedData = JSON.parse(data);
      AlertIOS.alert(
        'Event Type' + parsedData.Type,
        parsedData.Data
       );
    })
    
  }

  onSuccess(e) {
    this.connectHub(e.data)
    this.state.connected = true;
  }  

  render() {
    const {
      hasScanned,
      result,
      imagePath,
      fullImagePath,
      currentScanMode,
      buttonsDisabled,
      SDKVersion
    } = this.state;

    BackHandler.addEventListener('hardwareBackPress', () => {
      if (hasScanned) {
        this.emptyResult();
        return true;
      } else {
        BackHandler.exitApp();
      }
    });
    
    if(!this.state.connected) {
      return (
        <View style={styles.container}>
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            topContent={
              this._getHeaderText()
            }
            bottomContent={
              this._getFooterButton()
            }
          />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.containerAny} contentContainerStyle={styles.ContainerContent}>
          <Text style={styles.headline}>Anyline React-Native Example</Text>
          {hasScanned ? (
            <Result
              key="ResultView"
              currentScanMode={currentScanMode}
              result={result}
              imagePath={imagePath}
              fullImagePath={fullImagePath}
              data={result}
              emptyResult={this.emptyResult}
            />
          ) : <Overview key="OverView" openAnyline={this.openAnyline}
                        checkCameraPermissionAndOpen={this.checkCameraPermissionAndOpen}
                        disabled={buttonsDisabled}/>}
          <Text style={styles.versions}>SDK Version: {SDKVersion}</Text>
          <Text style={styles.versions}>RN-Build Number: 1</Text>
        </ScrollView>
      );
    }
  }

  _sendMessage() {
    console.log('hubconnection,', hubConnection);
    AlertIOS.alert(
      'Message Type',
      'Sent Scanned Passport'
     );
    //let msg = '{"Firstname":"KHAIMUK","Lastname":"CHAICHUA","Number":"D658965","IssuingCountryCode":"764","NationalityCountryCode":"764","Sex":"M","ExpirationDate":"2020-02-02","DayOfBirth":"1984-02-02","DocumentType":"PASSPORT","HasCheckDigitData":false,"AllCheckDigitsValid":true,"CheckdigitNumber":"4","ScannedDayOfBirth":"192131","CheckdigitDayOfBirth":"123213","ScannedExpirationDate":"","CheckdigitExpirationDate":"","PersonalNumber":"","CheckDigitPersonalNumber":"","MRZFullString":"P<THACHAICHUA<<KHAIMUK<<<<<<<<<<<<<<<<<<<<<<D658965<<8AFG7812053<3503270<<<<<<<<<<<<<<06","MRZCaptureByMethod":"Scanning","DocumentCapturedBy":"ProtoTypeRN"}';
    let msg = '{"Sender":"CFD_DEVICE_iPhoneX","Type":"EvtPassportScanData","Data":{"message":{"Firstname": "ERIKA", "Lastname": "MUSTERMANN", "Number": "C01X0006H", "IssuingCountryCode": "280", "NationalityCountryCode": "280", "Sex": "M", "ExpirationDate": "2020-02-02", "DayOfBirth": "1964-02-02", "DocumentType": "PASSPORT", "HasCheckDigitData": false, "AllCheckDigitsValid": true, "CheckdigitNumber": "4", "ScannedDayOfBirth": "192131", "CheckdigitDayOfBirth": "123213", "ScannedExpirationDate":"", "CheckdigitExpirationDate":"", "PersonalNumber":"", "CheckDigitPersonalNumber":"", "MRZFullString": "P<D<<MUSTERMANN<<ERIKA<<<<<<<<<<<<<<<<<<<<<<C01X0006H1D<<6408125F1710319<<<<<<<<<<<<<<<0", "MRZCaptureByMethod": "Scanning", "DocumentCapturedBy": "ProtoTypeRN" }}}';
    hubConnection.invoke('send',msg)
  }

  _getFooterButton() {

    if(this.state.connected) {
      return (
        <TouchableOpacity onPress={() => this._sendMessage()} style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>Scan Passport</Text>
      </TouchableOpacity>
      )
    } else {
      return (
        <Text style={styles.buttonText}>Scanning QRCode...</Text>
      )
    }
  }

  _getHeaderText() {
      if (this.state.connected) {
        return (
        <Text style="{styles.centerText}">
          Paired Successflly
        </Text>
        )
      } else {
        return (
        <Text style={styles.centerText}>
        Global Blue <Text style={styles.textBold}>IC2 to CFD POC</Text>. Only for testing purposes!
        </Text>
        )
      }
  }

  openAnyline = async (type) => {

    this.setState({buttonsDisabled: true});
    let config;

    this.setState({
      currentScanMode: type
    });
    switch (type) {
      case 'MRZ':
        config = MRZConfig;
        break;
      case 'DIGITAL_METER':
      default:
        config = EnergyConfig;
        break;
    }
    
    try {
      const result = await AnylineOCR.setupPromise(JSON.stringify(config), type);

      console.log(result);
      this.setState({buttonsDisabled: false});

      const data = JSON.parse(result);
      LayoutAnimation.easeInEaseOut();
      const fullImagePath = data.fullImagePath;
      const imagePath = data.imagePath;

      delete data.fullImagePath;
      delete data.imagePath;

      this.setState({
        hasScanned: true,
        result: data,
        imagePath: imagePath,
        fullImagePath: fullImagePath,
      });
    } catch (error) {
      if (error !== 'Canceled') {   
        console.log(error);
      }
    }
    this.setState({buttonsDisabled: false});
  };

  requestCameraPermission = async (type) => {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Anyline Camera Permissions',
          'message': 'Allow Anyline to access you camera?'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission allowed');
        this.openAnyline(type);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  hasCameraPermission = async () => {
    try {
      return await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    } catch (err) {
      console.warn(err, 'PERMISSION CHECK');
    }
  };

  checkCameraPermissionAndOpen = (type) => {
    this.hasCameraPermission().then((hasCameraPermission) => {
      console.log('hasCameraPermission result is ' + hasCameraPermission);
      if (hasCameraPermission) {
        console.log('Opening OCR directly');
        this.openAnyline(type);
      } else {
        this.requestCameraPermission(type);
      }
    });
  };

  emptyResult = () => {
    this.setState({
      hasScanned: false,
      result: '',
      imagePath: '',
      fullImagePath: ''
    });
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  centerText: {
    marginTop: 30,
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  }, 
  versions: {
    color: "white",
    marginTop: 10
  },
  containerAny: {
    flex: 1,
    width: "100%",
    backgroundColor: '#303030'
  },
  ContainerContent: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    marginTop: 50
  } 
});
