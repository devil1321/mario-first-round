import React, { useState } from "react";
import { Canvas, useCanvasRef } from "@shopify/react-native-skia";
import { View,  StyleSheet, useWindowDimensions } from "react-native";

export const RootCanvas: React.FC<{ children: React.ReactNode,handleRunLogic:any,APPActions:any}> = ({ children ,handleRunLogic,APPActions}) => {
    
  const { width, height } = useWindowDimensions();
  const canvasRef = useCanvasRef();
  const [isRunning,setIsRunning] = useState<boolean>(true)
  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Canvas 
          ref={canvasRef}
          style={{ width: width, height:height }}
          onTouchStart={(e) => {
            const { locationX, locationY } = e.nativeEvent;
            APPActions.handleTouch(locationX,locationY,height)
            setIsRunning(true)
            if(isRunning){
              handleRunLogic()
            }
          }}
          onTouchMove={(e) => {
            const { locationX, locationY } = e.nativeEvent;
            APPActions.handleTouch(locationX,locationY,height)
            if(isRunning){
              handleRunLogic()
            }
          }}
          onTouchEnd={(e) =>{
            const { locationX, locationY } = e.nativeEvent;
             APPActions.clearHandleTouch(locationX,locationY,height)
             setIsRunning(false)
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
