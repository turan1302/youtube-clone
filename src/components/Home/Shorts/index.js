import React, { Component } from "react";
import { Dimensions, FlatList, Image, ImageBackground, Text, View } from "react-native";
import shortData from "../../../data/shortData";
import Entypo from "react-native-vector-icons/Entypo";
import FilterBar from "../FilterBar";
import styles from "./styles";

export default class Shorts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get('window'),
    }
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener('change', this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  }

  render() {
    const {width,height} = this.state.windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <View style={styles.short_area}>
        <View style={styles.short_title_area}>
          <Image style={styles.short_logo} source={require("../../../assets/logo/yt_shorts_logo.png")} />
          <Text style={styles.short_title}>Shorts</Text>
        </View>
          <FlatList style={styles.item_list_area} horizontal showsHorizontalScrollIndicator={false} bouncess data={shortData}
                    keyExtractor={(item, index) => index} renderItem={({ item, index }) => {
            return (
              <ImageBackground
                style={styles.item_image(position,width,height)}
                imageStyle={styles.item_image_style} source={item.image}>
                <Entypo style={styles.item_dots_icon} name={"dots-three-vertical"} color={"white"} size={20} />
                <View>
                  <Text style={styles.item_title}>{item.title}</Text>
                  <Text style={styles.item_description}>{item.viewCount}</Text>
                </View>
              </ImageBackground>
            );
          }} />
      </View>
    );
  }
}
