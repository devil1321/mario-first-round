import React, { useState } from "react";
import { Canvas, useCanvasRef } from "@shopify/react-native-skia";
import { View,  StyleSheet, useWindowDimensions } from "react-native";

export const RootCanvas: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
  const { width, height } = useWindowDimensions();
  const canvasRef = useCanvasRef();

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Canvas
        ref={canvasRef}
        style={{ width: width, height:height }}
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
