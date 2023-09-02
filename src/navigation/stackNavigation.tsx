import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform, ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { StackParamList } from "../types";
import LoginScreen from "../screen/registers/LoginScreen";
import RegisterScreen from "../screen/registers/RegisterScreen";
import WelcomScreen from "../screen/registers/WelcomScreen"
import BottomTabs from "./BottomTabs";
import FinelSetting from "../screen/registers/FinelSetting";
import SowlutionScreen from "../screen/sowlutioinProject/SowlutionScreen";
import LiquidScreen from "../screen/LiquidSlider/LiquidScreen";
// import ImagesViewer from "../screen/imageViewer/ImagesViewer";
const Stack = createNativeStackNavigator<StackParamList>();
function StackNavigation() {
    const [userInfo, setUserInfo] = useAuth();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getLocalUser = async () => {
            try {
                setLoading(true);
                // AsyncStorage.removeItem("@user")
                const userJSON = await AsyncStorage.getItem("@user");
                const userData = userJSON ? JSON.parse(userJSON) : null;
                setUserInfo(userData);
            } catch (e) {
                console.log(e, "Error getting local user");
            }
            finally {
                setTimeout(() => setLoading(false), 1000)
                // setLoading(false)
            }
        };
        getLocalUser();
    }, []);
    if (loading)
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={"large"} style={{ width: 400 }} />
            </View>
        );
    return (
        <NavigationContainer >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            >
                <Stack.Navigator>
                    {
                        userInfo ? (
                            <>
                            {/* <Stack.Screen
                                    name="ImagesViewer"
                                    component={ImagesViewer}
                                    // options={{ headerShown: false }}
                                /> */}
                                <Stack.Screen
                                    name="LiquidScreen"
                                    component={LiquidScreen}
                                    options={{ headerShown: false }}
                                />
                                {/* <Stack.Screen
                                    name="SowlutionScreen"
                                    component={SowlutionScreen}
                                    options={{ headerShown: false }}
                                /> */}
                                <Stack.Screen
                                    name="Main"
                                    component={BottomTabs}
                                    options={{ headerShown: false }}
                                />

                            </>
                        ) : (
                            <>
                                <Stack.Screen
                                    name="WelcomScreen"
                                    component={WelcomScreen}
                                    options={{ headerShown: false }}
                                    initialParams={{ step: 1 }}
                                />
                                <Stack.Screen
                                    name="Login"
                                    component={LoginScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Register"
                                    component={RegisterScreen}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="someSetting"
                                    component={FinelSetting}
                                    options={{ headerShown: false }}
                                />
                            </>
                        )
                    }
                </Stack.Navigator>
            </KeyboardAvoidingView>
        </NavigationContainer>
    );
}
export default StackNavigation;