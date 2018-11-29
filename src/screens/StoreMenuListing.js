import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from '../styles/menu'
import AppRoutes      from '../common/AppRoutes';
import { fetch } from 'fetch';

class StoreMenuListing extends Component {

    constructor(props) {
      super(props)
      this.state={
        menuItems: [],
        branchcode: '',
        merchantcode: '',
      }
      this._onPress = this._onPress.bind(this);
    }

    componentDidMount() {
       let url =  'http://localhost:8080/OdgWebServices/rest/order/listMerchantMenus'
      //let url = 'http://puiyi.xyz/rest/order/listMerchantMenus'
      // let url = 'https://gist.githubusercontent.com/yllongboy/b83c29795cccf26a506ea3d897a4248e/raw/866dd5e3cd78b7f448f1d33a6440ebd0a9e7d536/ondgo-data-1';

      let branchCode = encodeURIComponent(this.props.selected.branchCode);
      let merchantCode = encodeURIComponent(this.props.selected.merchantCode);
      const requestBody = `branchcode=${branchCode}&merchantcode=${merchantCode}`;
      this.setState({branchcode: branchCode,merchantcode: merchantCode})
      fetch(url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: requestBody
      })
        .then(response => response.json())
        .then((data) => {
          console.log('Response from API:', data);
          this.setState({menuItems: data});
        });
    }

    render(){
      let route = AppRoutes.getRouteFromRouteId(7);
      let header = route.navbar;
      header.navBarTitle=this.props.selected.first_name;
      return (
          <ScrollView>
            <View style={styles.container}>
                <Text>Store Menu Screen</Text>

            </View>
          </ScrollView>
      );
    }

    _onPress(menu) {
      console.log('shit', menu)
      menu.branch_code=this.state.branchcode;
      this.props.navigator.push({
        id: 9,
        selected: menu
      })
    }
}

module.exports = StoreMenuListing;
