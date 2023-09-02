import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Keyboard,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Pressable,
} from "react-native";

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import React, { useState, useEffect } from "react";
import {StackParamList} from "../../types/index"
import { STATUSBAR_HEIGHT } from  '../../../constans'
import { appColors } from "../../data/color"
import { Entypo } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { useAuth } from "../../contexts/Auth";
import { images } from "../../data/images"
import {registerInputs} from "../../types/formValue"

type RegisterProps = {
    icon: any;
    state: string;
    setState: (value: string) => void;
    placeholder: string;
    error?: string;
};
  

const RegisterInput =({icon,state,setState,placeholder,error=""}:RegisterProps)=>{
    return (
        <View>
            <View style={Styles.input}>
                <Entypo name={icon} size={24} color="#008E97" />
                <TextInput value={state} style={{ flexGrow: 2 }} placeholder={placeholder} onChangeText={setState} />
            </View>
            {error && <Text style={Styles.error}>{error}</Text>}
        </View>
    )
}

type Props = NativeStackScreenProps<StackParamList, 'Register'>;

const LoginScreen = ({ navigation }:Props) => {
    // const [_, setUserInfo] = useAuth();
    //   const [sec, setSec] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirme, setComfirme] = useState("");
    const [errcomfirme, seterrComfirme] = useState("");
    const [name, setName] = useState("");
    const [errorPass, setErrorPass] = useState("")
    const [erroremail, setErroremail] = useState("")
      const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
      useEffect(()=>{
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
          setKeyboardIsOpen(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardIsOpen(false);
        });
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      },[])
    const handleRegisterogin = () => {
        if (!formValidation()) {
            const user:registerInputs = {
                name: name,
                email: email,
                password: password,
            };
            const data:string = JSON.stringify(user)
            //   AsyncStorage.setItem("@user", data);
            // console.log("asda");
            //   setUserInfo(user)
            navigation.navigate("someSetting", { email: email, name: name,password:password });
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
    }
    const formValidation = () => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const passwordupper = /^(?=.*[A-Z]).+$/;
        const passwordnumber = /^(?=.*[0-9]).+$/;
        setErroremail("")
        setErrorPass("")
        if (!emailRegex.test(email)) {
            setErroremail("hour email is not valide")
        } else if (password.length == 0) {
            setErrorPass("Password is required feild");
        } else if (password.length < 8 || password.length > 20) {
            setErrorPass("Password should be min 8 char and max 20 char");
        } else if (!passwordupper.test(password)) {
            setErrorPass("Password containe at minumal 1 upperCase");
        } else if (!passwordnumber.test(password)) {
            setErrorPass("Password containe at minumal 1 number");
        }
        else if (password !== comfirme) {
            seterrComfirme("Passwoad and confirm password should be same.");
        } else {
            return true
        }

    };
    return (
        <SafeAreaView style={Styles.contant}>
            <ImageBackground source={images["splash"]} style={Styles.backimage}>
            {!keyboardIsOpen?<Text style={{flex:2,paddingTop:40, textAlign: "center", fontFamily: "bold", color: appColors.status, fontSize: 40 }}>create Acout</Text>:<View style={{marginVertical:25}}></View>}
                <View style={{ justifyContent:"space-between",flex:5,marginTop:60 }}>
                    <View style={{}}>
                        <View style={{}}>
                                <RegisterInput state={name} setState={setName} icon={"home"} placeholder={"name"}/>
                                <RegisterInput state={email} setState={setEmail} icon={"home"} placeholder={"email"} error={erroremail}/>
                                <RegisterInput state={password} setState={setPassword} icon={"home"} placeholder={"pass"} error={errorPass}/>
                                <RegisterInput state={comfirme} setState={setComfirme} icon={"home"} placeholder={"com pass"} error={errcomfirme}/>
                        </View>
                        <View style={{paddingHorizontal:90,paddingVertical:10}}>
                            <TouchableOpacity onPress={handleRegisterogin} style={{alignItems:"center",paddingVertical:5,backgroundColor:"yellow",borderRadius:20}}>
                                <Text >sing up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 110 }}>
                        <View style={{ marginBottom: 50 }}>
                            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                <View style={{ flex: 1, height: 2, backgroundColor: "black" }}></View>
                                <Text>OR</Text>
                                <View style={{ flex: 1, height: 2, backgroundColor: "black" }}></View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 30, paddingBottom: 10, alignItems: "center" }}>
                                <TouchableOpacity style={{ padding: 3, backgroundColor: "orange" }}>
                                    <Entypo name="phone" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 3, backgroundColor: "blues" }}>
                                    <Entypo name="facebook" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ padding: 3, backgroundColor: "red" }}>
                                    <Entypo name="email" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text>have acount ass?</Text>
                                <Pressable onPress={() => navigation.navigate("Login")}><Text style={{ fontSize: 20, color: "white" }}> sing in</Text></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default LoginScreen;

const Styles = StyleSheet.create({
    contant: {
        flex: 1,
        position: "relative",
        paddingTop: STATUSBAR_HEIGHT
    },
    backimage: {
        flex: 1,
        justifyContent: "space-between",
    },
    error: {
        fontSize: 14,
        color: "red",
        paddingLeft:40
    },
    input: {
        padding: 13,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15,
        
    },

});