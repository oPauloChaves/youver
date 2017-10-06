/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from "react"
import {StyleSheet, View} from "react-native"
import {Container, Content, Spinner} from "native-base"
import YTSearch from "./utils/youtubeApi"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import VideoList from "./components/VideoList"

const API_KEY = "AIzaSyAsbrMpPyS-pjcnCR9vylQycotSvI_NuHk"
const DEFAULT_SEARCH = "reactjs"

export default class App extends Component {
  state = {
    term: "",
    videos: [],
    loading: false,
  }

  searchYouTube = term => {
    YTSearch({q: term, key: API_KEY})
      .then(data => {
        let videos = []
        if (data && data.hasOwnProperty("items")) {
          videos = data.items
        }
        this.setState({videos, loading: false})
      })
      .catch(err => {
        console.error(err)
        this.setState({videos: [], loading: false})
      })
  }

  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading,
    })
  }

  onSubmitSearch = () => {
    this.toggleLoading()
    this.searchYouTube(this.state.term)
  }

  onChangeTerm = newTerm => {
    this.setState({
      term: newTerm,
    })
  }

  componentDidMount() {
    this.toggleLoading()
    this.searchYouTube(DEFAULT_SEARCH)
  }

  render() {
    const {videos = [], loading, term} = this.state

    return (
      <Container style={styles.container}>
        <Header title="YouTube Search" />
        <Content style={styles.content}>
          <SearchBar
            onPressSearch={this.onSubmitSearch}
            onChangeTerm={this.onChangeTerm}
            term={term}
          />
          {loading && <Spinner color="red" />}
          {videos.length > 0 && <VideoList videos={videos} />}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: "#eee",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
})
