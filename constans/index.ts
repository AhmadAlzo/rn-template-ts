import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const SCREEN_HEIGHT:number = Math.round(Dimensions.get('window').height);
export const SCREEN_WIDTH:number = Math.round(Dimensions.get('window').width);
export const STATUSBAR_HEIGHT:number = getStatusBarHeight()
export const BASE_URL:string = 'http://192.168.1.3:3000'  
