import React, {Component} from "react"
// import {View, Text} from "react-native"
import App from "./src/App"

export default class AppRoot extends Component {
  // state = {
  //   isReady: false,
  // }

  render() {
    // if (!this.state.isReady) {
    //   return (
    //     <View>
    //       <Text>Loading...</Text>
    //     </View>
    //   )
    // }
    return <App />
  }
}
