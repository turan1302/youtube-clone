import React, { Component } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FilterBar from "../components/Home/FilterBar";

const Stack = createNativeStackNavigator();

export default class Routes extends Component {

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
      <NavigationContainer>
        <Stack.Navigator screenOptions={({ navigation, route }) => {
          return {
            headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              height: 200,
            },
          };
        }}>
          <Stack.Screen name={"Home"} component={Home} options={({ route, navigation }) => {
            return {
              headerShown: true,
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "#141514",
              },
              headerBackVisible: false,
              header: () => (
                <View style={{
                  backgroundColor: "#0f0f0f",
                }}>
                  <View style={{
                    flexDirection: "row",
                    backgroundColor: "#0f0f0f",
                    justifyContent: "space-between",
                    padding: 10,
                    alignItems: "center",
                  }}>
                    <View style={{ justifyContent: "center",paddingVertical : 3}}>
                      <Image style={{
                        width: (position==="PORTRAIT") ? width * 0.290 : width * 0.15,
                        height: (position==="PORTRAIT") ? height * 0.033 : height *0.07,
                      }}
                             source={require("../assets/logo/yt_logo_dark.png")} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                      <MaterialIcons name={"cast"} size={25} color={"gray"} style={{ marginRight: 15 }} />
                      <MaterialIcons name={"notifications-none"} size={25} color={"gray"} style={{ marginRight: 15 }} />
                      <Feather name={"search"} size={25} color={"gray"} />
                    </View>
                  </View>
                  <FilterBar/>
                </View>
              ),
            };
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
