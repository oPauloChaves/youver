import {Font, AppLoading} from "expo"
import React from "react"
import App from "./src/App"

export default class App1 extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
    this.setState({isReady: true})
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return <App />
  }
}
