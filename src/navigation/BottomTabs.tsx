import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../types/index"
import { appColors } from "../data/color";
import HomeScreen from "../screen/mainPages/HomeScreen"
import ContactScreen from "../screen/mainPages/ContactScreen";
import NotScreen from "../screen/mainPages/NotScreen";
import SettingScreen from "../screen/mainPages/SettingScreen";




const Tab = createBottomTabNavigator<TabParamList>();


function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: appColors.status },
    }} >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",

          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={24} color="orange" />
            ) : (
              <Ionicons name="home" size={24} color="#008E97" />
            ),
        }}
      />
      <Tab.Screen
        name="contact"
        component={ContactScreen}
        options={{
          tabBarLabel: "Friend",
          headerShown: false,
          tabBarLabelStyle: { color: "#008E97" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="orange" />
            ) : (
              <Ionicons name="person" size={24} color="#008E97" />
            ),
        }}
      />
      <Tab.Screen
        name="Not"
        component={NotScreen}
        options={{
          tabBarLabel: "Not",
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="book-sharp" size={24} color="orange" />
            ) : (
              <Ionicons name="book-sharp" size={24} color="#008E97" />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "Setting",
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="setting" size={24} color="orange" />
            ) : (
              <AntDesign name="setting" size={24} color="#008E97" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs