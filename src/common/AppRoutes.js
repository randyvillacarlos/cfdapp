'use strict';

const routes = [
  {
    id                  : 1,
    refView             : 'HomeView',
    swipeHorizontal     : true,
    sidemenu: {
      sideMenuButtonText  : 'Home',
      iconType            : 'ionicons',
      iconName            : 'ios-home',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : '',
      navBarLeftIconName  : 'ios-menu',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'openMenu',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 2,
    refView             : 'Profile',
    swipeHorizontal     : true,
    sidemenu: {
      sideMenuButtonText  : 'Profile',
      iconType            : 'ionicons',
      iconName            : 'ios-person',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : 'User Profile',
      navBarLeftIconName  : 'ios-menu',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'openMenu',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 3,
    refView             : 'History',
    swipeHorizontal     : true,
    sidemenu: {
      sideMenuButtonText  : 'History',
      iconType            : 'ionicons',
      iconName            : 'ios-time',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : 'History',
      navBarLeftIconName  : 'ios-menu',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'openMenu',
      navBarRightIconName : '',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 4,
    refView             : 'Login',
    swipeHorizontal     : false,
    sidemenu: {
      sideMenuButtonText  : 'Login',
      iconType            : 'ionicons',
      iconName            : 'ios-log-in',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : 'Login',
      navBarLeftIconName  : 'ios-arrow-back',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'back',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 5,
    refView             : 'Terms',
    swipeHorizontal     : true,
    sidemenu: {
      sideMenuButtonText  : 'Terms',
      iconType            : 'ionicons',
      iconName            : 'ios-folder',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : 'Terms',
      navBarLeftIconName  : 'ios-menu',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'openMenu',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 6,
    refView             : 'About Us',
    swipeHorizontal     : true,
    sidemenu: {
      sideMenuButtonText  : 'About Us',
      iconType            : 'ionicons',
      iconName            : 'ios-information-circle',
      iconSize            : 30,
    },
    navbar: {
      navBarTitle         : 'About Us',
      navBarLeftIconName  : 'ios-menu',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'openMenu',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 7,
    refView             : 'Store Menu',
    swipeHorizontal     : false,
    navbar: {
      navBarTitle         : 'Fuck off',
      navBarLeftIconName  : 'ios-arrow-back',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'back',
      navBarRightIconName : 'ios-home-outline',
      navBarRightIconSize : 32,
      navBarRightIconEvent: 'openStoreProfile'
    }
  },
  {
    id                  : 8,
    refView             : 'StoreProfile',
    swipeHorizontal     : false,
    navbar: {
      navBarTitle         : 'Store Profile',
      navBarLeftIconName  : 'ios-arrow-back',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'back',
      navBarRightIconName : 'md-map',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 9,
    refView             : 'StoreListing',
    swipeHorizontal     : false,
    navbar: {
      navBarTitle         : 'Store Listing',
      navBarLeftIconName  : 'ios-arrow-back',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'back',
      navBarRightIconName : 'ios-cart',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  },
  {
    id                  : 10,
    refView             : 'ItemInfo',
    swipeHorizontal     : false,
    navbar: {
      navBarTitle         : '',
      navBarLeftIconName  : 'ios-arrow-back',
      navBarLeftIconSize  : 32,
      navBarLeftIconEvent : 'back',
      navBarRightIconName : 'ios-cart',
      navBarRightIconSize : 32,
      navBarRightIconEvent: ''
    }
  }
];


class AppRoutesClass {
  getRouteFromRouteId(routeId) {
    const routeFound = routes.find((route) => {
      if (route.id === routeId) {
        return route;
      }
    });
    return routeFound;
  }

  getAllRoutes() {
    return [].concat(routes);
  }

}


let AppRoutes = new AppRoutesClass();

export default AppRoutes;
