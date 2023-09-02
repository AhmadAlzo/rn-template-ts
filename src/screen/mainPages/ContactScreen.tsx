import { View,  StyleSheet, Animated } from 'react-native'
import React from 'react'
import { STATUSBAR_HEIGHT, SCREEN_WIDTH } from "../../../constans"
import { appColors } from "../../data/color"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import ScrollAnimation from '../../componets/ScrollAnimation';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from "../../types"
const data = [
  {
    userId: "1232",
  },
  {
    userId: "1s32",
  },
  {
    userId: "12vs2",
  },
  {
    userId: "123x2",
  },
  {
    userId: "12x232",
  },
  {
    userId: "12JDFJ232",
  },
  {
    userId: "12YUT562",
  },
  {
    userId: "1sYTE32",
  },
  {
    userId: "12EWREWvs2",
  },
  {
    userId: "12WER3x2",
  },
  {
    userId: "12WERx232",
  },
  {
    userId: "1223TRWE2",
  },
  {
    userId: "12asdas562",
  },
  {
    userId: "12afasvs2",
  },
  {
    userId: "12agsgR3x2",
  },
  {
    userId: "1gsdgas232",
  },
  {
    userId: "12dsagRWE2",
  },
  {
    userId: "12sdgasd562",
  },

]
const rayons = [SCREEN_WIDTH / 1.5, SCREEN_WIDTH * 1.35, SCREEN_WIDTH * 2.1, SCREEN_WIDTH * 2.9, SCREEN_WIDTH * 4.3]
const ITEM_SIZE = 80;
const SPACING = 20;
type Props = BottomTabScreenProps<TabParamList, "contact">
const ContactScreen = ({ navigation }: Props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={Styles.contant}>
      <LinearGradient
        colors={[appColors.status, appColors.status, appColors.status, appColors.status, appColors.status, appColors.status, appColors.red]}
        {...deg(0)}
        style={Styles.linear5}>
      </LinearGradient>
      <ScrollAnimation data={data} raduis={rayons[3]} outputRange={[600, 100, 40, 20, 10, 0, 5, 15, 40, 100, 600]} />
      <ScrollAnimation data={data} raduis={rayons[2]} outputRange={[600, 200, 50, 30, 15, 0, 1, 20, 50, 200, 600]} />
      <ScrollAnimation data={data} raduis={rayons[1]} outputRange={[600, 520, 80, 50, 30, 0, 10, 30, 80, 520, 600]} />
      <LinearGradient
        colors={[appColors.status, appColors.red]}
        {...deg(0)}
        style={Styles.linear1}>
      </LinearGradient>
    </View>
  )
}
const Styles = StyleSheet.create({
  contant: {
    flex: 1,
    position: "relative",
    // padding: 50,
    paddingTop: STATUSBAR_HEIGHT
  },
  linear1: {
    width: rayons[0],
    height: rayons[0],
    position: "absolute",
    bottom: -rayons[0] / 2,
    borderRadius: 999,
    left: SCREEN_WIDTH / 2 - rayons[0] / 2,
    // transform: [{translateX: }],
  },
  linear5: {
    width: rayons[4],
    height: rayons[4],
    position: "absolute",
    bottom: -rayons[4] / 2,
    borderRadius: 999,
    left: SCREEN_WIDTH / 2 - rayons[4] / 2,

  },
}); export default ContactScreen