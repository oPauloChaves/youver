import React from "react" // eslint-disable-line
import {Navigation} from "react-native-navigation"

import {registerScreens} from "./screens"

registerScreens()

const navigatorStyle = {
  statusBarColor: "black",
  statusBarTextColorScheme: "#e62117",
  navigationBarColor: "black",
  navBarBackgroundColor: "#e62117",
  navBarTextColor: "white",
  navBarButtonColor: "white",
  tabBarButtonColor: "red",
  tabBarSelectedButtonColor: "red",
  tabBarBackgroundColor: "#e62117",
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true,
}

Navigation.startSingleScreenApp({
  screen: {
    screen: "youver.YouTubeSearch",
    title: "YouTube Search",
    navigatorStyle,
    leftButtons: [
      {
        id: "sideMenu",
      },
    ],
  },
  drawer: {
    left: {
      screen: "youver.Drawer",
    },
  },
})
