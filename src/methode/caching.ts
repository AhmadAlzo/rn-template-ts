import { Image } from 'react-native';
import { FontSource, loadAsync } from 'expo-font';
import { Asset } from 'expo-asset';

export const cacheFonts = (fonts: FontSource[]) => {
  return fonts.map((font) => {
    if (typeof font === 'string') {
      return loadAsync(font);
    } else {
      return loadAsync(font as Record<string, FontSource>);
    }
  });
};

export const cacheImages = (images: (string | number)[]) => {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image as any).downloadAsync();
    }
  });
};