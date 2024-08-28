import React, { Component } from "react";
import { Dimensions, ScrollView, StatusBar, Text, View } from "react-native";
import VideoVertical from "../../components/Home/VideoData/VideoVertical";
import styles from "./styles";
import VideoHorizontal from "../../components/Home/VideoData/VideoHorizontal";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowDimensions : Dimensions.get("window")
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
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';


    return (
      <View style={styles.container_area}>
        <StatusBar backgroundColor={"black"} />
        {(position==="PORTRAIT") ? <VideoVertical/> : <VideoHorizontal/>}
        <VideoVertical/>
      </View>
    );
  }
}
