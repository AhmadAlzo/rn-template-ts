import React, { useRef,useEffect, useState } from "react";
import { Animated, PanResponder, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle,Platform,Keyboard } from "react-native";

interface FluidDrawerNativeProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    drawerHeight?: number;
    handleVisible?: boolean;
    topTouchAreaStyle:StyleProp<ViewStyle>;
    handleStyle?: StyleProp<ViewStyle>;
    drawerStyle?: StyleProp<ViewStyle>;
    backdropStyle?: StyleProp<ViewStyle>;
    backdropTouchable?: boolean;
  }
  const FluidDrawerNative: React.FC<FluidDrawerNativeProps> = ({
    open,
    onClose,
    children,
    drawerHeight = 350,
    handleVisible = true,
    handleStyle,
    drawerStyle,
    backdropStyle,
    topTouchAreaStyle,
    backdropTouchable = true,
  }) => {
    const translateYAnim = useRef(new Animated.Value(drawerHeight)).current;
    const opacityAnim = useRef(new Animated.Value(open ? 1 : 0)).current;
    const [renderComponent, setRenderComponent] = useState(open);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [openKe,setOpen] = useState<boolean>(false)
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => {
          const isVerticalSwipe =
            Math.abs(gestureState.dx) < Math.abs(gestureState.dy);
          const isSwipeDown = gestureState.dy > 0;
          return isVerticalSwipe && isSwipeDown;
        },
        onPanResponderMove: (evt, gestureState) => {
          if (gestureState.dy > 0) {
            translateYAnim.setValue(Number(gestureState.dy));
          }
        },
        onPanResponderRelease: (evt, gestureState) => {
          if (gestureState.dy > 200) {
            onClose();
          } else {
            Animated.timing(translateYAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;
    useEffect(() => {
        if (open) {
            setRenderComponent(true);
          }
      Animated.timing(translateYAnim, {
        toValue: open ? 0 : 350,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacityAnim, {
        toValue: open ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        if (!open) {
          setRenderComponent(false);
        }
      });
    }, [open]);
    useEffect(() => {
        function keyboardWillShow(e:any) {
            const newOffset = e.endCoordinates.height;
            // setKeyboardHeight(newOffset);
          //   Animated.timing(translateYAnim, {
          //     toValue: -220,
          //     duration: e.duration,
          //     useNativeDriver: true,
          // }).start();
          setOpen(true)
        }
        function keyboardWillHide(e:any) {
            // setKeyboardHeight(0);
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: e.duration,
                useNativeDriver: true,
            }).start();
            setOpen(false)
        }
        // Platform specific events
        const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
        const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
        const showListener = Keyboard.addListener(showEvent, keyboardWillShow);
        const hideListener = Keyboard.addListener(hideEvent, keyboardWillHide);
        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);
    return renderComponent?(
        <Animated.View style={[styles.container,backdropStyle]}>
            {backdropTouchable ? (
                <TouchableOpacity style={styles.backdropTouchSurface} onPress={onClose} />
            ) : (
                <View style={styles.backdropTouchSurface} />
            )}
            <Animated.View  
            style={[
                     styles.drawer,{bottom:openKe?keyboardHeight/1.9:0},
                     { transform: [{ translateY: translateYAnim }], height: drawerHeight },
                    drawerStyle,
            ]}>
                <View style={[styles.drawerHandleContainer,topTouchAreaStyle]} {...panResponder.panHandlers}>
                        {handleVisible&&<View style={[styles.drawerVisualHandle,handleStyle]}/>}
                </View>
                {children}
            </Animated.View>
        </Animated.View>
    ):null
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.6)'
    },
    openKE:{

    },
    drawer:{
        width:'100%',
        backgroundColor:'#fff',
        position:'absolute',
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        
    },
    drawerHandleContainer:{
        width:'100%',
        height:30,
        borderRadius:15,
        alignItems:'center',
        paddingTop:5
    },
    drawerVisualHandle:{
        height:5,
        width:50,
        borderRadius:3,
        backgroundColor:'#9DB2BF'
    },
    backdropTouchSurface:{
        flex:1,
        width:'100%'
    }
})
export default FluidDrawerNative