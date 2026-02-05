import React, { useState } from "react";
import { Canvas, useCanvasRef } from "@shopify/react-native-skia";
import { View,  StyleSheet, useWindowDimensions } from "react-native";

export const RootCanvas: React.FC<{ children: React.ReactNode,APPActions:any}> = ({ children ,APPActions}) => {
    
  const { width, height } = useWindowDimensions();
  const canvasRef = useCanvasRef();
  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Canvas 
          ref={canvasRef}
          style={{ width: width, height:height }}
          onTouchStart={(e) => {
            const { locationX, locationY } = e.nativeEvent;
            APPActions.handleTouch(locationX,locationY,height)
          }}
          onTouchMove={(e) => {
            const { locationX, locationY } = e.nativeEvent;
            APPActions.handleTouch(locationX,locationY,height)
          }}
          onTouchEnd={(e) =>{
            const { locationX, locationY } = e.nativeEvent;
             APPActions.clearHandleTouch(locationX,locationY,height)
            }}     
        >
        {children}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RootCanvas;
