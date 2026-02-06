import React, {useEffect } from 'react';
import { useImage, Image as SkiaImage } from '@shopify/react-native-skia';

const Player:React.FC<{ player:any }> = ({player}) => {
  
  const imageWidth = 1200
  const imageHeight = 1200
  const offsetY = 135
    
  const playerImage = useImage(require('../assets/mario/player.png'));
  
  return (
    <SkiaImage
      image={playerImage}
      x={player.currentFrame.translateX}
      y={player.translateY}
      width={imageWidth}
      height={imageHeight}
      clip={{
          x:player.currentFrame.translateX,
          y:offsetY + player.translateY,
          width:player.currentFrame.width,
          height:player.currentFrame.height
        }}
    />
 
  );
};

export default Player;
