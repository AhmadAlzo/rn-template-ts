import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Easing, Value, timing } from 'react-native-reanimated';

const InfiniteRotation = () => {
  // Create an animated value to track the rotation angle
  const rotate = new Value(0);

  // Create a timing animation function
  const rotateAnimation = timing(rotate, {
    toValue: 360, // Rotate to 360 degrees
    duration: 2000, // Animation duration in milliseconds
    easing: Easing.linear, // Easing function for a smooth rotation
    useNativeDriver: true, // Use native driver for better performance
  });

  // Start the rotation animation infinitely
  const startRotation = () => {
    rotate.setValue(0); // Reset the rotation value
    rotateAnimation.start(() => {
      startRotation(); // Start the rotation animation again once it completes
    });
  };

  // Start the rotation when the component mounts
  React.useEffect(() => {
    startRotation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          transform: [{ rotate: `${rotate}deg` }], // Apply the rotation
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfiniteRotation;