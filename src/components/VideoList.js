import React, {Component} from "react"
import {View, Image, StyleSheet} from "react-native"
import {Content, Card, CardItem, Text, Icon, Button} from "native-base"

const VideoItem = ({video, onPlay}) => {
  const {
    channelTitle,
    title,
    description,
    thumbnails: {medium: {url}},
  } = video.snippet

  return (
    <Card style={styles.card}>
      <CardItem cardBody>
        <Image source={{uri: url}} style={styles.image} />
      </CardItem>
      <CardItem cardBody>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.channelTitle}>{channelTitle}</Text>
          <Text style={styles.description}>{description}</Text>
          <Button iconLeft style={styles.playButton} onPress={onPlay}>
            <Icon name="play" />
            <Text>Play</Text>
          </Button>
        </View>
      </CardItem>
    </Card>
  )
}

class VideoList extends Component {
  onPlay = video => {
    console.log(this.props)
    this.props.navigator.push({
      screen: "youver.PlayVideo",
      title: "Screen Play Video",
      passProps: {
        video,
      },
    })
  }

  render() {
    return (
      <Content>
        {this.props.videos.map(video => (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onPlay={event => this.onPlay(video)}
          />
        ))}
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 2,
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
    borderRadius: 3,
  },
  info: {
    padding: 3,
  },
  title: {
    fontWeight: "bold",
  },
  channelTitle: {
    color: "#aaa",
    fontSize: 14,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  playButton: {
    marginTop: 5,
    backgroundColor: "#e62117",
    alignSelf: "flex-end",
  },
})

export default VideoList
