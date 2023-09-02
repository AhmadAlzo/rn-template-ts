import { FlatList, StyleSheet,Animated } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import { SCREEN_WIDTH } from "../../constans"
import { appColors } from "../data/color"

const ITEM_SIZE = 80;
const SPACING = 20;

type ScrollAnimationProps = {
  raduis:number,
  data:any[],
  outputRange:number[]
}
const ScrollAnimation:React.FC<ScrollAnimationProps>  = ({raduis,data,outputRange}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <LinearGradient
      colors={[appColors.status, appColors.status, appColors.red]}
      {...deg(0)}
      style={[
        Styles.linear,
        {
          width: raduis,
          height: raduis,
          bottom: -raduis / 2,
          left: SCREEN_WIDTH / 2 - raduis / 2,
        },
      ]}
    >
    <Animated.FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.userId}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      contentContainerStyle={{
        gap:25,
        paddingHorizontal: (raduis-SCREEN_WIDTH)/2,
        height:300,
        overflow:"hidden",
        minWidth:SCREEN_WIDTH*2
      }}
      renderItem={({item , index }) => {
        let inputRange = [
          ITEM_SIZE * index-SCREEN_WIDTH-ITEM_SIZE-50,
          ITEM_SIZE * index-SCREEN_WIDTH-ITEM_SIZE,
          ITEM_SIZE * index-SCREEN_WIDTH+ITEM_SIZE,
          ITEM_SIZE * index-SCREEN_WIDTH/2-ITEM_SIZE,
          ITEM_SIZE * index-SCREEN_WIDTH/2-ITEM_SIZE/2,
          ITEM_SIZE * index-SCREEN_WIDTH/2+ITEM_SIZE/2,
          ITEM_SIZE * index-SCREEN_WIDTH/2+ITEM_SIZE,
          ITEM_SIZE * index-SCREEN_WIDTH/2+ITEM_SIZE*3/2,
          ITEM_SIZE * index,
          ITEM_SIZE * (index + 2),
          ITEM_SIZE * (index + 2)+50,
        ];
        inputRange = inputRange.map(e=>e+25*index)
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: outputRange, // Adjust these values for the wave effect
        });
        return (
          < Animated.View
            style={[Styles.ITEM, { transform: [{ translateY  }] }]}
            // padding={SPACING}
          // marginBottom={SPACING}
          >
          </Animated.View>
        );
      }}
    />
  </LinearGradient>
  )
}
const Styles = StyleSheet.create({
    linear: {
        position: "absolute",
        borderRadius: 999,
        paddingTop: 30,
      },
      ITEM: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        borderRadius: 1000,
        // marginHorizontal: SPACING,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }
})
export default ScrollAnimation