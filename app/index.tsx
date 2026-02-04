  import React, { useEffect } from "react";
  import { StyleSheet, View } from "react-native";
  import { StageComponents } from "@/app/components";
  import * as ScreenOrientation from "expo-screen-orientation";
  import * as PlayerActions from './controller/actions-creator/player.actions-creator'
  import { useSelector,useDispatch } from "react-redux";
  import { bindActionCreators } from "redux";
import {State} from "./controller/reducers/root.reducer";

  export default function App() {

      const dispatch = useDispatch()
      const playerActions = bindActionCreators(PlayerActions,dispatch)
      const player  = useSelector((state:State) => state.player) 
    
      useEffect(()=>{
        playerActions.initPlayerFrame({
            width:30,
            height:33,
            translateX:300,
            translateY:355
        })
      },[])

     useEffect(() => {
        ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      return () => {
        ScreenOrientation.unlockAsync();
      };
    }, []);

    return (
        <View style={styles.container}>
          <StageComponents.RootCanvas>
            <StageComponents.Background />
            <StageComponents.Controls />
            <StageComponents.Player player={player} />
          </StageComponents.RootCanvas>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"100%",
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })