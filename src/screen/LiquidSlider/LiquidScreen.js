import React from 'react';
import LiquidSwipe from './pages/LiquidSwipe';
import { useFonts } from 'expo-font';
import {View} from "react-native"
const fonts = {
  "SFProDisplay-Bold": require("../../../assets/fonts/Montserrat-Regular.ttf"),
  "SFProDisplay-Regular": require("../../../assets/fonts/Georgia.ttf"),
};
export default function LiquidScreen() {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <View></View>;
  } else {
    return (
        <LiquidSwipe />
    );
  }
};