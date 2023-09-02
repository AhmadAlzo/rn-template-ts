import { View, Text,Image } from 'react-native'
import React ,{useEffect,useState}from 'react'
import axios  from 'axios'
import { STATUSBAR_HEIGHT } from '../../../constans'
const SowlutionScreen = () => {
    // const [url,setUrl]=useState("https://img2.baidu.com/it/u=1835117106,152654887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350")
    useEffect(()=>{
        const getdata = async()=>{
            try{
                const res = await axios.get("https://randomuser.me/api/")
                // setUrl(res.data["message"])
                console.log(res.data["results"][0]["picture"]) 

            }catch(e){
                console.log(e)
            }
        }
        getdata()
    },[])
  return (
    <View style={{flex:1,paddingTop:STATUSBAR_HEIGHT}}>
        <View style={{paddingTop:10 ,width:"100%",flex:1/2.7, padding:0}}>
            {/* <Image source={{uri:url}} resizeMode="contain"  style={{width:"100%",height:"100%"}}/> */}
        </View>  
      <Text>SowlutionScreen</Text>
    </View> 
  )
}

export default SowlutionScreen