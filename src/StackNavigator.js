import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "./screens/Welcome";

const StackNavigator = createNativeStackNavigator();

export const StackNavigatorScreens = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="Welcome" component={Welcome} />
    </StackNavigator.Navigator>
  );
};
