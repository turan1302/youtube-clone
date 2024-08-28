import React, { Component } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

export default class Routes extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={({ navigation, route }) => {
          return {
            headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              height: 200,
            },
          };
        }}>
          <Stack.Screen name={"HomeScreen"} component={TabNavigator} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
