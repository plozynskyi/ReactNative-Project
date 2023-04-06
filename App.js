import React from "react";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

import useRout from "./router";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRout();

  return <NavigationContainer>{routing}</NavigationContainer>;
}
