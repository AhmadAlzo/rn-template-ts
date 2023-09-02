import { View,StyleSheet,ScrollView } from 'react-native'
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';


import {TabParamList} from "../../types"
import { SCREEN_WIDTH } from '../../../constans'
import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';
import CarouselComponent from '../../componets/Carousel'
import CardCarouselHome from '../../componets/CardCarouselHome'
import { appColors } from '../../data/color';

const data = [{
  title: "Aenean leo",
  body: "Ut tincidunt tincidunt erat. Sed cursus",
  imgUrl: "https://picsum.photos/id/11/200/300",
  widthSvg:SCREEN_WIDTH-80
},
{
  title: "In turpis",
  body: "Aenean ut eros et nisl sagittis vestibulum. ",
  imgUrl: "https://picsum.photos/id/10/200/300",
  widthSvg:SCREEN_WIDTH-80
},
{
  title: "Lorem Ipsum",
  body: "Phasellus ullamcorper ipsum rutrum nunc. .",
  imgUrl: "https://picsum.photos/id/12/200/300",
  widthSvg:SCREEN_WIDTH-80
},{
  title: "In turpis",
  body: "Aenean ut eros et nisl sagittis vestibulum. ",
  imgUrl: "https://picsum.photos/id/10/200/300",
  widthSvg:SCREEN_WIDTH-80
},
{
  title: "Lorem Ipsum",
  body: "Phasellus ullamcorper ipsum rutrum nunc. .",
  imgUrl: "https://picsum.photos/id/12/200/300",
  widthSvg:SCREEN_WIDTH-80
},
];
type Props = BottomTabScreenProps<TabParamList,"Home">
const HomeScreen = ({navigation}:Props) => {
  return (
    <View style={{ flex: 1, paddingTop: 150, position: "relative" }}>
      <View style={{ height: 300, width: "100%", position: "absolute", backgroundColor: "green" }}>
      <LinearGradient
              colors={[appColors.red,appColors.status, appColors.status]}
              {...deg(0)}
              style={styles.linear}>
            </LinearGradient>
      </View>
      <ScrollView style={{ paddingTop: 140}} contentContainerStyle={{backgroundColor:"white",paddingBottom:120}}>
        <View style={styles.container}>
        <CarouselComponent  data={data} CarouselCardItem={CardCarouselHome} width={SCREEN_WIDTH-60}/>
        </View>
        <View style={styles.container}>
        <CarouselComponent  data={data} CarouselCardItem={CardCarouselHome} width={SCREEN_WIDTH-60}/>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width:SCREEN_WIDTH-60,
    marginHorizontal:30,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:30
  },
  linear:{
    width:"100%",
    height:"100%"
  }
})
export default HomeScreen