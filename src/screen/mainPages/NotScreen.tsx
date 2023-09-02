import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from "../../types"
import { StatusBar } from 'expo-status-bar';
import { Marquee } from '../../componets/Marker';
const primary = true;
import { Heading } from '../../componets/Marker/components/Heading';
import { Box } from '../../componets/Marker/components/Box';

type Props = BottomTabScreenProps<TabParamList, "Not">
const duration = 2000;
const NotScreen = ({ }: Props) => {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Marquee spacing={55} speed={1}>
        <Heading primary={primary}>
          @animatereactnative/marquee component
        </Heading>
      </Marquee>
      <Marquee spacing={20} speed={1}>
        <Heading primary={primary}>Iam ahmad adnan i AM THE BEST</Heading>
      </Marquee>
      <Marquee spacing={20} speed={2}>
        <Heading primary={primary}>Built with Reanimated</Heading>
      </Marquee>
      <Marquee spacing={10} speed={1.75} style={{ marginTop: 12 }}>
        <Box size={50} primary={primary} />
      </Marquee>
      <Marquee spacing={10} speed={2} style={{ marginTop: 12 }}>
        <View style={{ flexDirection: 'row' }}>
          {[...Array(5).keys()].map((i) => {
            return (
              <Box
                key={`box-${i}`}
                spacing={i === 4 ? 0 : 10}
                size={120}
                primary={primary}
              >
                <Heading primary={!primary}>{i}</Heading>
              </Box>
            );
          })}
        </View>
      </Marquee>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    gap:50,
    justifyContent: 'center',
    backgroundColor: !primary ? '#F0F464' : '#1F1F1F',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
export default NotScreen;