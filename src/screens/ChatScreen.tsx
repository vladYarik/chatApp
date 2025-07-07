import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/UI/Input";
import MessagesContainer from "../components/Chat/MessagesContainer";
import SendMessageBar from "../components/Chat/SendMessageBar";
import colors from "../consts/colors";
import { useHistory } from "../state/ChatProvider";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import createUniqId from "../funcs/createUniqId";

export default function ChatScreen() {
    
    const { messages, getChatHistory } = useHistory();
    const navigation = useNavigation();
    const route = useRoute();

    useFocusEffect(React.useCallback(() =>{
      console.log('403')
      if(!route.params || !route.params?.chatId){
        navigation.setParams({chatId:createUniqId()})
        
      }
      console.log('params: ',route.params)
    },[route?.params]))
    
    const getHistory =async (id:string) => {
        await getChatHistory(id)
    }

    useEffect(() => {
      if(route.params?.chatId){
        
        getHistory(route.params.chatId);
      }
    },[route.params])
  return (
    <MainLayout>
      <View style={styles.container}>
        
        <MessagesContainer messages={messages} />
        <SendMessageBar />
      </View>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:16,
    },

})
