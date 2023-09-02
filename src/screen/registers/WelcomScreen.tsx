import { View, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { images } from "../../data/images"
import { STATUSBAR_HEIGHT,SCREEN_WIDTH } from '../../../constans/index'
import { appColors } from "../../data/color"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import WaveSvg from '../../componets/WaveSvg';
import {StackParamList} from "../../types/index"
const text = [[
  "Save Your Money Conveniently", "Get 5% cashback on each transaction and spend it easily"
], ["Secure your money for free and get rewards", "Get the most secure payment app and enjoy it"], ["Get the most secure payment app and enjoy it", "Online Investing has never been so easier as it is right now"]]



type Props = NativeStackScreenProps<StackParamList, 'WelcomScreen','MyStack'>;

const WelcomScreen= ({ route, navigation }:Props)=> {
  let step = 1
  const data = route?.params;
  if (data?.step) {
    step = data.step
  }
  const handelPress = () => {
    if (step == 3) {
      navigation.navigate("Register")
    } else {
      navigation.push("WelcomScreen", { step: step + 1 })
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: STATUSBAR_HEIGHT }}>
      <View style={{ flex: 3.5, position: "relative" }}>
        <Image
          source={images["Welcom"][step - 1]}
          style={Styles.image}
        />
        <WaveSvg color={"white"} width={SCREEN_WIDTH}/> 
      </View>
      <View style={Styles.contant}>
        <View>
          <Text style={Styles.text1}>{text[step - 1][0]}</Text>
          <Text style={Styles.text2}>{text[step - 1][1]}</Text>
        </View>
        <View style={Styles.get}>
          <View style={Styles.steps}>
            <View style={step == 1 ? Styles.step1 : Styles.step2}></View>
            <View style={step == 2 ? Styles.step1 : Styles.step2}></View>
            <View style={step == 3 ? Styles.step1 : Styles.step2}></View>
          </View>
          <TouchableOpacity onPress={handelPress} style={{ width: "100%" }}>
            <LinearGradient
              colors={[appColors.red,appColors.blue, appColors.red]}
              {...deg(180)}
              style={Styles.butt}>
              <Text style={{ fontSize: 20, color: "white",fontFamily:"UbuntuLight" }}>{step < 3 ? "next" : 'done'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
const Styles = StyleSheet.create({
  image: {
    maxWidth: '100%',
    flex: 1,
    // maxHeight: "40%"
  },
  contant: {
    flex: 5,
    position: "relative",
    padding: 25,
    justifyContent: "space-between"
  },
  text1: {
    fontSize: 27,
    color: appColors.status,
    marginVertical: 10,
    fontFamily: "bold",
    textAlign: "center"
  },
  text2: {
    fontSize: 18,
    color: appColors.status,
    textAlign: "center"
  },
  get: {
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical:10
  },
  steps: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3
  },
  step1: {
    height: 15,
    borderRadius: 10,
    width: 15,
    backgroundColor: "blue"
  },
  step2: {
    height: 15,
    borderRadius: 10,
    width: 15,
    backgroundColor: '#B5BFFF'
  },
  butt: {
    alignItems: "center",
    padding: 15,
    borderRadius: 40,
    width: "100%"
  },
})
export default WelcomScreen;


