import React, { Component } from "react";
import { Dimensions, FlatList, Image, ImageBackground, Text, View } from "react-native";
import videoData from "../../../../data/videoData";
import Shorts from "../../Shorts";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";

export default class VideoVertical extends Component {

  constructor(props) {
    super(props);

    this.state = {
      windowDimensions: Dimensions.get("window"),
    };
  }

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener("change", this.handleResize);
  }

  componentWillUnmount() {
    if (this.dimensionsSubscription) {
      this.dimensionsSubscription.remove();
    }
  }

  handleResize = ({ window }) => {
    this.setState({ windowDimensions: window });
  };


  render() {
    const { width, height } = this.state.windowDimensions;
    const position = width > height ? "LANDSCAPE" : "PORTRAIT";

    return (
      <View style={styles.container}>
        <FlatList ListHeaderComponent={() => (
          <View>
            <Shorts />
          </View>
        )} data={videoData} showsVerticalScrollIndicator={false} bounces keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => (
                    <View style={styles.item_area}>
                      <ImageBackground style={styles.item_image(width, height)} source={item.image}>
                        <View style={styles.item_duration_area}>
                          <View style={styles.item_duration_container}>
                            <Text style={styles.item_duration_text}>{item.duration}</Text>
                          </View>
                        </View>
                      </ImageBackground>
                      <View style={styles.item_description_area}>
                        <View style={styles.description_left_container}>
                          <Image style={styles.description_avatar} source={item.avatar} />
                          <View style={styles.description_container}>
                            <Text style={styles.item_title}>{item.title}</Text>
                            <Text style={styles.item_desc}>{item.user} • {item.viewCount} izlenme
                              • {item.date}</Text>
                          </View>
                        </View>
                        <View style={styles.description_right_container}>
                          <Entypo name={"dots-three-vertical"} color={"white"} size={15} />
                        </View>
                      </View>
                    </View>
                  )} />
      </View>
    );
  }
}
