import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { appColors } from '../../data/color'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFriendContext } from '../../contexts/FriendContext'
const SettingFrined = ({route}) => {
    const [_,setFrind] = useFriendContext()
    const [frindState,setTatus] =useState(Array(route.params.number).fill(1)) 
  return (
    <View style={{flex:1,backgroundColor:appColors.blue}}>
      
    </View>
  )
}
export default SettingFrined