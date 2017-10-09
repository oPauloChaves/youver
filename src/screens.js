/* eslint-disable import/prefer-default-export */
import {Navigation} from "react-native-navigation"

import Drawer from "./modules/Drawer"
import YouTubeSearch from "./YouTubeSearch"
import PlayVideo from "./PlayVideo"

export function registerScreens() {
  Navigation.registerComponent("youver.YouTubeSearch", () => YouTubeSearch)
  Navigation.registerComponent("youver.PlayVideo", () => PlayVideo)
  Navigation.registerComponent("youver.Drawer", () => Drawer)
}
