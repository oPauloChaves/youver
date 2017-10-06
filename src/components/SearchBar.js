import React, {Component} from "react"
import {StyleSheet} from "react-native"
import {Icon, Item, Input} from "native-base"

export default class SearchBar extends Component {
  render() {
    const {term, onPressSearch, onChangeTerm} = this.props

    return (
      <Item style={styles.search}>
        <Input
          placeholder="Search"
          onSubmitEditing={onPressSearch}
          onChangeText={onChangeTerm}
          value={term}
        />
        <Icon name="search" />
      </Item>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    marginTop: 10,
    backgroundColor: "#fff",
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 3,
    borderWidth: 1,
  },
})
