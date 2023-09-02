import { View, Text, Image, StyleSheet, TouchableOpacity,Switch } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
import { useAuth } from "../../contexts/Auth";
import { SCREEN_WIDTH} from '../../../constans'
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {StackParamList} from "../../types/index"
import { images } from '../../data/images';
// import { Switch } from '@rneui/themed';

type Props = NativeStackScreenProps<StackParamList, 'someSetting'>;
const FinelSetting = ({ route }:Props) => {
    const [not, setnot] = useState(false);
    const [sms, setsms] = useState(false);
    const [email, setemail] = useState(false);
    const [_, setUserInfo] = useAuth();
    let par = route.params
    const handleRegisterogin = () => {
        const pas = {
            not: not == true,
            sms: sms == true,
            email: email == true
        }
        const data = { ...par, notification: pas }
        AsyncStorage.setItem("@user", JSON.stringify(data));
        // console.log("asda");
        setUserInfo(data)
        // navigation.navigate("Main");
        //   axios
        //     .post("http://localhost:8000/login", user)
        //     .then((response) => {
        //       console.log(response);
        //   const token = "adsdadas" //response.data.token;
        //   AsyncStorage.setItem("authToken", token);
        //   navigation.replace("Main");
        //     })
        //     .catch((error) => {
        //       Alert.alert("Login Error", "Invalid Email");
        //       console.log(error);
        //     });
    }
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Image source={images["Welcom"][2]} style={{ height: "40%", width: SCREEN_WIDTH }} />
            <View style={Styles.cont}>
                <View style={{ gap: 20 }}>
                    <View>
                        <Text style={Styles.title}>Stay on top of your RelationShip</Text>
                        <Text>asdasd asdasd asdas d asd asd as dsa </Text>
                    </View>
                    <View>
                        <View style={Styles.contSwitch}>
                            <Text style={Styles.title}>push notification</Text>
                            <Switch
                                value={not}
                                onValueChange={() => setnot(!not)}
                                style={{borderWidth:2,borderColor:"orange",padding:10,width:100,}}
                                thumbColor={"orange"}
                            />
                        </View>
                        <Text>a dsasd ada sd asdas asassds  ahmad bfdbg bgfb</Text>
                    </View>
                    <View>
                        <View style={Styles.contSwitch}>
                            <Text style={Styles.title}>SMS</Text>
                            <Switch
                                value={sms}
                                style={{borderWidth:2,borderColor:"orange"}}
                                onValueChange={() => setsms(!sms)}
                            />
                        </View>
                        <Text>asdad asdas asd asd asd as as d sad a</Text>
                    </View>
                    <View>
                        <View style={Styles.contSwitch}>
                            <Text style={Styles.title}>EMAIL</Text>
                            <Switch
                                value={email}
                                style={{borderWidth:2,borderColor:"orange"}}
                                onValueChange={() => setemail(!email)}
                            />
                        </View>
                        <Text>adas dad asd as dasd asd a d</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleRegisterogin} style={{ alignItems: "center", padding: 14, backgroundColor: "red", borderRadius: 30 } }>
                    <Text style={{color:"white",fontWeight:"700"}}>done</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    cont: {
        height: "69%",
        position: "absolute",
        borderTopLeftRadius: 60,
        width: "100%",
        justifyContent: "space-between"
        , padding: 20,
        backgroundColor: "white", bottom: 0
    },
    title: {
        // fontSize:,
        fontFamily:"bold"
    },

    contSwitch: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export default FinelSetting