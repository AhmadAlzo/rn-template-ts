import { View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../constans'
import Svg, { Path } from 'react-native-svg';

interface WaveSvgProps {
    color: string;
    width: number;
}


const WaveSvg:React.FC<WaveSvgProps> = ({color,width}) => {
    return (
        <View style={{
                position: "absolute",
                width:"100%",
                bottom: -2
            }
        }>
            <Svg height="100" width={width} viewBox={`0 0 ${width} 100`}>
                <Path
                    d={`M0 50
                        Q ${width / 4} 40, ${width / 2} 70,
                        T ${width} 50
                        V 100
                        H 0
                        Z`}
                    fill={color}
                />
            </Svg>
        </View>
    )
}

export default WaveSvg