import { View, Text,Image } from 'react-native'
import React ,{useEffect,useState}from 'react'
import axios  from 'axios'
import { STATUSBAR_HEIGHT } from '../../../constans'
function filterdata (data){
  let temp = {}
  temp["gender"] = data["data"]
  temp["name"] = Object.values(data["name"]).join(" ")
  temp["location"] = data["location"]
  return temp
}
const SowlutionScreen = () => {
    const [data,setdata]=useState([])
    // useEffect(() => {
    //   const getdata = async () => {
    //     let dataTemp = [];
    //     let intervalId; // Declare intervalId variable
    
    //     try {
    //       intervalId =setInterval(async () => {
    //         const res = await axios.get("https://randomuser.me/api/");
    //         dataTemp.push(1);
    //         if (dataTemp.length === 6) {
    //           clearInterval(intervalId); // Clear the interval when dataTemp reaches a length of 6
    //         }
    //       }, 100);
    //     } catch (e) {
    //       console.error(e);
    //     } finally {
    //       console.log(dataTemp);
    //       // You can set your state with dataTemp here if needed.
    //     }
    //   };
    
    //   getdata();
    // }, []);
  return (
    <View style={{flex:1,paddingTop:STATUSBAR_HEIGHT}}>
        <View style={{paddingTop:10 ,width:"100%",flex:1/2.7, padding:0}}>
        </View>  
      <Text>SowlutionScreen</Text>
    </View> 
  )
}

export default SowlutionScreen