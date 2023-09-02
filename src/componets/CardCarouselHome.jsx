import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import WaveSvg from './WaveSvg'
import { appColors } from "../data/color";

import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { deg } from 'react-native-linear-gradient-degree';

const Batt = ()=>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("addPersone")} style={{ width: "100%" }}>
            <LinearGradient
              colors={[appColors.red,appColors.blue, appColors.red]}
              {...deg(180)}
              style={styles.butt}>
              <Text style={{ fontSize: 20, color: "white",fontFamily:"UbuntuLight" }}>asadas</Text>
            </LinearGradient>
          </TouchableOpacity>
    )
}


const  CardCarouselHome=({ item, index })=> {
    //
    const handelPress = ()=>{
        // navigation.navigate("")
    }
    return (
        <View style={styles.card} key={index}>
            <View style={{ flex: 1 / 3,height:200}}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <WaveSvg color="white" width={item.widthSvg} />
            </View>
            <View style={{padding:30,gap:30}}>
                <Text style={styles.header}>{item.title}</Text>
                <Batt/>
            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.69,
        shadowRadius: 0.65,
        elevation: 9,
        margin: 0,
        // width:"100%"
    },
    image: {
        width: "100%",
        // flex: 1,
        height: 200,
        // resizeMode:"cover"
    },
    header: {
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
    },
    butt: {
        alignItems: "center",
        padding: 15,
        borderRadius: 40,
        width: "100%"
      },
})
export default CardCarouselHome