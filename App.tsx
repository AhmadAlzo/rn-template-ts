import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState,useCallback,useEffect } from "react"
import * as SplashScreen from 'expo-splash-screen';

import StackNavigation from "./src/navigation/stackNavigation";

import { FriendContext } from "./src/contexts/FriendContext";
import { AuthProvider } from "./src/contexts/Auth"
import vectorFonts from './src/data/Fonts';
import { cacheImages, cacheFonts } from "./src/methode/caching";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    loadAssetsAsync();
  }, []);
  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/splash.jpeg'),
    ]);
    const fontAssets = cacheFonts([
      ...vectorFonts,
      // { georgia: require('./assets/fonts/Georgia.ttf') },
      // { regular: require('./assets/fonts/Montserrat-Regular.ttf') },
      // { light: require('./assets/fonts/Montserrat-Light.ttf') },
      { bold: require('./assets/fonts/Montserrat-Bold.ttf') },
      { UbuntuLight: require('./assets/fonts/Ubuntu-Light.ttf') },
      // { UbuntuBold: require('./assets/fonts/Ubuntu-Bold.ttf') },
      // { UbuntuLightItalic: require('./assets/fonts/Ubuntu-Light-Italic.ttf') },
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
    setIsReady(true);
  };
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <SafeAreaProvider  style={{ flex: 1 }} onLayout={onLayoutRootView}>   
      <AuthProvider>
        <FriendContext>
        <StackNavigation/>
        </FriendContext>
      </AuthProvider>
      <StatusBar backgroundColor="#110134" style="light" />
    </SafeAreaProvider>
  );
}