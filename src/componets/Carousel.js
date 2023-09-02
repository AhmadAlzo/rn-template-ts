import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const CarouselComponent = ({CarouselCardItem,width,data}) => {
  const [index, setIndex] = React.useState(0) 
  const isCarousel = React.useRef(null)
  return (
    <>
          <Carousel
            layout="tinder"
            layoutCardOffset={18}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={width}
            itemWidth={width-20}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
          />
          <View style={{position:"absolute",bottom:45}}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          </View>
        </>
  )
}
const styles = StyleSheet.create({
    slider:{
    },
    sliderContentContainer:{
      paddingVertical:35,
      backgroundColor:"white"
    },
  })
export default CarouselComponent