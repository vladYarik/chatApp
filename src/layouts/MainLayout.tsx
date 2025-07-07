
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from 'react'
import colors from "../consts/colors";
import { SafeAreaView } from "react-native-safe-area-context";
interface props {
    children: ReactNode;
}   
const MainLayout:React.FC<props> = ({children}) => {
  return (
    <SafeAreaView style={styles.background} edges={["top"]}>
      <ImageBackground 
          source={require("../../assets/images/back2.png")}
          resizeMode="cover"
          style={styles.backImage}
        >
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding"  keyboardVerticalOffset={50}>
          <View
            
            style={styles.container}
          >
            
            <View style={styles.header}>
              <View style={{width:8,height:4,backgroundColor:colors.black,borderRadius:10}} ></View>
              <Text style={styles.title}>VladChat</Text>
              <View style={{width:8,height:4,backgroundColor:colors.black,borderRadius:10}} ></View>
            </View>
            <View style={styles.contentContainer}>{children}</View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    color: colors.textPrimary,
    backgroundColor: colors.background,
  },
  backImage:{
    flex:1,
  },
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 15,
    
    gap: 30,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection:'row',
    gap:10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 42,
    color: colors.black,
    fontFamily: "Comfortaa-SemiBold",
  },
  subtitle: {
    fontWeight: "600",
    color: colors.white,
  },
});
export default MainLayout