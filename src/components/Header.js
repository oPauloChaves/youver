import React, {Component} from "react"
import {StyleSheet} from "react-native"
import {Header, Left, Body, Right, Button, Icon, Title} from "native-base"

export default class HeaderApp extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="home" />
          </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e62117",
  },
})
