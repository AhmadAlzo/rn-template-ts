import { View, Text } from 'react-native'
import React from 'react'
import Swiper from "../../componets/swiper"
// import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { TabParamList } from "../../types"
import { STATUSBAR_HEIGHT,SCREEN_WIDTH,SCREEN_HEIGHT } from '../../../constans'

const Test = ({color}) => {
  return (
    <View style={{backgroundColor:color,height:SCREEN_HEIGHT-100,top:-80,width:SCREEN_WIDTH}}>

    </View>
  )
}

const data = [
  {
    tabLabel: 'Valid 1',
    component: Test,
    props: {color:"red"}
  },
  {
    tabLabel: 'Valid 2',
    component: Test,
    props: {color:"blue"}
  },
  {
    tabLabel: 'Valid 3',
    component: Test,
    props: {color:"green"}
  }
];

// type Props = BottomTabScreenProps<TabParamList, "Setting">


const SettingScreen = ({ }) => {
  return (
    <View style={{flex:1,paddingTop:STATUSBAR_HEIGHT,alignItems:"center",position:"relative"}}>
      <Swiper
        data={data}
        style={styles}
        isStaticPills={true} 
          stickyHeaderEnabled={true}
          scrollableContainer={true}
          stickyHeaderIndex={1}
            />
    </View>
  )
}

const styles = {
  pillContainer: {

    width:"100%",
    borderRadius:60,
    overflow:"hidden",
  },
  staticPillsContainer: {
  },
  pillButton: {
    backgroundColor: 'white',
    window:20,
    borderRaduis:70
  },
  pillActive: {
    backgroundColor: 'yellow',
  },
  pillLabel: {
    color: 'gray',
  },
  activeLabel: {
    color: 'red',
  },
  borderActive: {
    color:"green"
  },
  pillsOverflow: {
    position:"absolute",
    top:20,
    width:SCREEN_WIDTH-150,
    // height:60,
    zIndex:100,
    left:75,
  }
};

export default SettingScreen