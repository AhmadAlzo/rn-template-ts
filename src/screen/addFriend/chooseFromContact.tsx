import { View, Text, ScrollView ,TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { STATUSBAR_HEIGHT } from '../../../constans'
import { appColors } from '../../data/color'
import * as Contacts from 'expo-contacts';
import ReactNativeInputSearchBar from '../../componets/searchCompoent/SearchBar';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { StackParamList } from '../../types';

type params = NativeStackScreenProps<StackParamList,"ChooseFromContact">
const ChooseFromContact = ({navigation}:params) => {
  const [chow,setChow] = useState({prev:[],next:[]})
  const [activeSearch, setActiveSearch] = useState(false)
  var contactsList:(string[])[] = []
  const onSubmitSearch = (val:string) => {}
  useEffect(() => {
    const permmsionofContact = async () => {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      for (let i = 0; i < data.length; i++) {
        const contact:any = data[i];
        try {
          if (contact["name"] != "null null" && contact["phoneNumbers"][0]["number"].toString().startsWith("+")) {
            let arr = []
            arr.push(contact["name"])
            arr.push(contact["phoneNumbers"][0]["number"]);
            contactsList.push(arr)
          }
        } catch (e) {
        } 
      }
      setChow((pre:any)=>{
        return {...pre, prev:contactsList,next:contactsList}
      })
    }
    permmsionofContact()
  },[])
  const chooseOne = (e:any[])=>{
    navigation.navigate("SettingFrined",{data:e,number:1})
  }
  const onChangeChangeConten=((ele:string)=>{
    setChow(prex=>{
      let res = prex["prev"].filter((e:string[])=>{
        return e[0].includes(ele)||e[1].includes(ele)
      })
      return {...prex,next:res}
    })
    
  })
return (
  <View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT, backgroundColor: appColors.violet }}>
    <View style={{flex:1/6,justifyContent:"center",paddingHorizontal:20}}>
        <ReactNativeInputSearchBar
          onSubmitSearch={onSubmitSearch}
          onActiveSearch={setActiveSearch}
          onChangeChangeConten={onChangeChangeConten}
          inputTextStyle={{}}
          buttonStyle={{
            paddingHorizontal: 20
          }}
          buttonTextStyle={{}}
          searchToolContainerStyle={{ height: 40}}
          inputContainerStyle={{
            backgroundColor: '#ffffff',
            borderWidth: 0.3,
            borderRadius: 20
          }}
          inputProps={{
            placeholder: 'Please enter your search query'
          }}
          buttonText="Search"
        />
    </View>
    <ScrollView style={{flex:1/5,backgroundColor:"red",}} contentContainerStyle={{gap:10}}>
      {chow["next"].map((e,i)=>{
        return (
          <View key={i} style={{height:100,width:"100%" ,backgroundColor:"blue",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:20}}>
            <Text style={{backgroundColor:"red",flex:1/2.5,height:"60%",borderRadius:30,textAlign:"center"}}>{e[0]}</Text>
            <TouchableOpacity onPress={()=>chooseOne(e)} style={{width:50,height:50,alignItems:"center",justifyContent:"center",
            borderRadius:30,
            backgroundColor:"green"}}><Text>add</Text></TouchableOpacity>
            <Text style={{backgroundColor:"red",flex:1/2.5,height:"60%",borderRadius:30,textAlign:"center"}}>{e[1]}</Text>
          </View>
        )
      })}
    </ScrollView>
  </View>
)
}

export default ChooseFromContact