  import React, { useEffect } from "react";
  import { StyleSheet, View } from "react-native";
  import { StageComponents } from "@/app/components";
  import * as ScreenOrientation from "expo-screen-orientation";
  import * as PlayerActionsCreator from './controller/actions-creator/player.actions-creator'
  import * as WorldActions from './controller/actions-creator/world.actions-creator'
  import * as AppActions from './controller/actions-creator/app.actions-creator'
  import { useSelector,useDispatch } from "react-redux";
  import { bindActionCreators } from "redux";
  import {State} from "./controller/reducers/root.reducer";
  import { PlayerActions } from "./controller/enums";

  export default function App() {

      const dispatch = useDispatch()
      const APPActions = bindActionCreators(AppActions,dispatch)
      const playerActions = bindActionCreators(PlayerActionsCreator,dispatch)
      const worldActios = bindActionCreators(WorldActions,dispatch)
      const player  = useSelector((state:State) => state.player) 
    
      const handleRunLogic = () =>{
        worldActios.makeButtonAction()
        playerActions.animatePlayerSprite()
      }


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

    useEffect(()=>{
      requestAnimationFrame(handleRunLogic)
    },[])

    return (
        <View style={styles.container}>
          <StageComponents.RootCanvas APPActions={APPActions}>
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