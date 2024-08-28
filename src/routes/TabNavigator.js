import React, { Component } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FilterBar from "../components/Home/FilterBar";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Tab = createBottomTabNavigator();


export default class TabNavigator extends Component {
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

  _renderItem = ()=>{
    return (
      <Text>asd</Text>
    )
  }

  render() {
    const {width,height} = Dimensions.get("window");
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    return (
      <Tab.Navigator screenOptions={()=>{

        return {
          tabBarStyle : {
            backgroundColor : "#141514",
            height : 58,
            borderTopWidth : 0
          },
          tabBarItemStyle : {
            marginVertical : 8,
          },
          tabBarLabelStyle : {
            marginLeft : (position==="LANDSCAPE") ? 10 : 10
          },
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
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
          )
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={({ route, navigation }) => {
          return {
            tabBarIcon : ({focused})=>{

              return (
                <MaterialIcons name={"home-filled"} color={focused ? ("white") : "black"} size={30}/>
              )
            },
            tabBarLabelStyle : {
              color : "white"
            }
          };
        }} />

        <Tab.Screen name="Shorts" component={Home} options={({ route, navigation }) => {
          return {
            tabBarIcon : ({focused})=>{

              return (
                <MaterialIcons name={"play-circle"} color={focused ? ("white") : "black"} size={30} style={{marginRight : (position==="LANDSCAPE") ? -3 : 0}}/>
              )
            },
            tabBarLabelStyle : {
              color : "white",
            }
          };
        }} />

        <Tab.Screen name="New" component={Home} options={({ route, navigation }) => {
          return {
            tabBarIcon : ({focused})=>{

              return (
                <Feather name={"plus-circle"} color={focused ? ("white") : "black"} size={30} style={{marginRight : (position==="LANDSCAPE") ? -6 : 0}}/>
              )
            },
            tabBarLabelStyle : {
              color : "white",
              display : "none"
            },
          };
        }} />

        <Tab.Screen name="Subscribers" component={Home} options={({ route, navigation }) => {
          return {
            tabBarIcon : ({focused})=>{

              return (
                <Foundation name={"play-video"} color={focused ? ("white") : "black"} size={30} style={{marginRight : (position==="LANDSCAPE") ? -3 : 0}}/>
              )
            },
            tabBarLabelStyle : {
              color : "white"
            },
            title : "Abonelikler"
          };
        }} />

        <Tab.Screen name="Profile" component={Home} options={({ route, navigation }) => {
          return {
            tabBarIcon : ({focused})=>{

              return (
                <Entypo name={"user"} color={focused ? ("white") : "black"} size={30} style={{marginRight : (position==="LANDSCAPE") ? -3 : 0}}/>
              )
            },
            tabBarLabelStyle : {
              color : "white"
            },
          };
        }} />
      </Tab.Navigator>
    )
  }
}
