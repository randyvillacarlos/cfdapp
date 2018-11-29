'use strict'

import React, { Component } from 'react'
import { DeviceEventEmitter, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'

import Drawer from 'react-native-drawer'
import SideMenuContent from './common/SideMenuContent'
import AppRoutes from './common/AppRoutes'
import Button from './common/Button'
import Home from './screens/Home'
import History from './screens/History'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Terms from './screens/Terms'
import AboutUs from './screens/AboutUs'
import ItemInfo from './screens/ItemInfo'
import StoreProfile from './screens/store/StoreProfile'
import StoreMenuListing from './screens/StoreMenuListing'
import styles from './styles/root'
import Icon   from 'react-native-vector-icons/Ionicons'
import { EventEmitter } from 'fbemitter';

let _emitter = new EventEmitter();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _panValue: 0.5 // disable swipe if set to 0
    }
  }

  componentDidMount() {
      var self = this;

      _emitter.addListener('openMenu', () => {
          self._drawer.open();
      });

      _emitter.addListener('back', () => {
          self.refs.navigator.pop();
          let routeStack      = [].concat(self.refs.navigator.getCurrentRoutes())
          let previousRouteId   = routeStack[routeStack.length -1].id
          let currentRoute = AppRoutes.getRouteFromRouteId(previousRouteId);
          this.setState({_panValue: currentRoute ? 0.5 : 0})
      });

      _emitter.addListener('openStoreProfile', () => {
          self.refs.navigator.push({
            id: 8,
          })
      });
  }

  renderRouteMapper() {
    const routes = AppRoutes.getAllRoutes();
    return  {
      Title : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        if(currentRouteId != undefined) {
          return (
            <Text style={styles.titleNavText}>
              {routes[currentRouteId - 1].navbar.navBarTitle}
            </Text>
          );
        }
      },
      LeftButton : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        let currentRoute = routes[currentRouteId - 1];
        if(currentRouteId != undefined) {
          return (
            <Button
              style={styles.leftNavButton}
              onPress={() => {_emitter.emit(currentRoute.navbar.navBarLeftIconEvent)}}>
              <Icon name={currentRoute.navbar.navBarLeftIconName} size={25} color={'#4db6ac'} />
            </Button>
          );
        }

      },
      RightButton : (route, navigator, index, navState) => {
        const currentRouteId  = navState.routeStack[index].id;
        let currentRoute = routes[currentRouteId - 1];
        if(currentRouteId != undefined && currentRoute.navbar.navBarRightIconName != '') {
          return (
            <Button
              style={styles.leftNavButton}
              onPress={() => {_emitter.emit(currentRoute.navbar.navBarRightIconEvent)}}>
              <Icon name={currentRoute.navbar.navBarRightIconName} size={25} color={'#4db6ac'} />
            </Button>
          );
        }
      }
    };

  }

  render() {
      const DEFAULT_ROUTE = { id: 1, refView: 'HomeView' };
      return(
        <Drawer
            ref={(ref) => this._drawer = ref}
            type="overlay"
            content={<SideMenuContent
                backGndColor="#048D79"
                navigate={(route)=>{
                  this.navigate(route)
                  this._drawer.close()
            }}/>}
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            panOpenMask={this.state._panValue}
            negotiatePan={true}
            closedDrawerOffset={-3}
            styles={{
                drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
                main: {paddingLeft: 3}
            }}
            tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
            })}>
            <SafeAreaView style={styles.safeArea}>
                <Navigator
                    ref="navigator"
                    configureScene={(route) => Navigator.SceneConfigs.FloatFromLeft}
                    initialRoute={ DEFAULT_ROUTE }
                    renderScene={(route, navigator) => this._renderScene(route, navigator)}
                    navigationBar={
                        <Navigator.NavigationBar
                            // style={styles.navBar}
                            routeMapper={this.renderRouteMapper()} />
                    }
                />
            </SafeAreaView>
        </Drawer>

      )
  }

  _renderScene(route, navigator) {
    const currentRoute = AppRoutes.getRouteFromRouteId(route.id);
    var globalNavigatorProps = { navigator }
    if(route.component) {
      var Component = route.component;
      return (
        <Component navigator={navigator} route={route} {...route.passProps} />
      )
    }
    switch (route.id) {
      case 1:

        return (
          <Home
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 2:
        return (
          <Profile
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 3:
        return (
          <History
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 4:
        return (
          <Login
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 5:
        return (
          <Terms
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 6:
        return (
          <AboutUs
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
      case 7:
        return (
          <StoreMenuListing
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
            selected={route.selected}
          />
        );
      case 8:
        return (
          <StoreProfile
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
            selected={route.selected}
          />
        );
      case 9:
        return (
            <ItemInfo
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
            selected={route.selected}
          />
        );
      case 10:
        return (
          <ItemInfo
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
            selected={route.selected}
          />
        );
      default:
        return (
          <Home
            ref={currentRoute.refView}
            navigator={navigator}
            navigate={(toRoute)=>this.navigate(toRoute)}
          />
        );
    }
  }

  navigate(route) {
    const routeStack      = [].concat(this.refs.navigator.getCurrentRoutes());
    const previousRouteId = routeStack[routeStack.length - 1].id;
    if (route.id !== previousRouteId) {
      this.refs.navigator.replace(route);
    }
    this.refs.navigator.push(route);
    const currentRoute = AppRoutes.getRouteFromRouteId(route.id);
    this.setState({_panValue: currentRoute.swipeHorizontal ? 0.5 : 0})
  }

}

export default App;
