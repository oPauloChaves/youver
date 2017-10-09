import React, {Component} from "react"
import {StyleSheet} from "react-native"
import {Container, Content} from "native-base"
import {API_KEY} from "./constants"
import YouTube from "react-native-youtube"

export default class PlayVideo extends Component {
  render() {
    const {video} = this.props

    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <YouTube
            apiKey={API_KEY}
            videoId={video.id.videoId}
            play
            fullscreen
            loop
            onError={e => console.error(e)}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
