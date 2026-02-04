import React from 'react';
import { useImage, Image as SkiaImage, Group, Line } from '@shopify/react-native-skia';
import {useWindowDimensions} from 'react-native';

const Background = () => {

  const backgroundImage = useImage(require('../assets/mario/stage.png'));
  const { width, height } = useWindowDimensions();

  return (
    <Group>
      <SkiaImage
        image={backgroundImage}
        x={0}      
        y={0}
        width={8376}   
        height={1200}  
        fit="fill"              
      />
      <Line p1={{x:0,y:523}} p2={{x:8376,y:523}} color="blue" strokeWidth={5} />
    </Group>
  );
};

export default Background;
