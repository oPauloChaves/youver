import React, {Component} from "react"
import {
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from "react-native"
import {Icon} from "native-base"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  drawerList: {},
  drawerListIcon: {
    width: 27,
  },
  drawerListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
  },
  drawerListItemText: {
    color: "#222",
    paddingLeft: 15,
    flex: 1,
  },
})

export default class Drawer extends Component {
  goToSearch = () => {
    this.toggleDrawer()
    this.props.navigator.popToRoot({
      screen: "youver.YouTubeSearch",
    })
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      to: "closed",
      side: "left",
      animated: true,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.drawerList}>
          <TouchableOpacity onPress={this.goToSearch}>
            <View style={styles.drawerListItem}>
              <Icon name="md-search" />
              <Text style={styles.drawerListItemText}>YouTube Search</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerListItem}>
            <Icon name="ios-desktop" />
            <Text
              style={styles.drawerListItemText}
              onPress={() =>
                ToastAndroid.show("Coming Soon!", ToastAndroid.SHORT)}>
              PlayList
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
