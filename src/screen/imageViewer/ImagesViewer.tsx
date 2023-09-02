import React, { memo, useRef, useMemo } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ImageWrapper, ImageViewer,ImageViewerRef  } from "./components/index";
const ImageViewerPage = () => {
  const imageRef = useRef<ImageViewerRef>(null);
  const mockData = useMemo(
    () => [
      {
        smallUrl:
          'https://img2.baidu.com/it/u=1835117106,152654887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=556',
        url: 'https://img2.baidu.com/it/u=1835117106,152654887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=556',
      },
      {
        smallUrl:
          'https://img1.baidu.com/it/u=139191814,3489949748&fm=253&fmt=auto&app=138&f=JPEG?w=491&h=491',
        url: 'https://img1.baidu.com/it/u=139191814,3489949748&fm=253&fmt=auto&app=138&f=JPEG?w=491&h=491',
      },
      {
        smallUrl:
          'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        url: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      },
    ],
    [],
  );
  return (
    <>
      <ImageViewer
        ref={imageRef}
        data={mockData.map((el) => ({ key: `key-${el.url}`, source: { uri: el.url } }))}
      />
      <ScrollView  contentContainerStyle={{maxWidth:400,rowGap:1000,flexDirection:"row",flexWrap:"wrap"}}>
        {mockData.map((el, index) => (
          <ImageWrapper
            key={el.smallUrl}
            viewerRef={imageRef}
            index={index}
            source={{
              uri: el.smallUrl,
            }}
          >
            <View style={{marginHorizontal:20,borderWidth:10,borderColor:"red"}}>
            <Image
              source={{
                uri: el.smallUrl,
              }}
              style={{ width: 100, height: 100 }}
            />
            </View>
          </ImageWrapper>
        ))}
      </ScrollView>
    </>
  );
};
export default memo(ImageViewerPage);