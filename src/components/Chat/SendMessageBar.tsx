import { View, Text, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Input from '../UI/Input';
import MainButton from '../UI/MainButton';
import { useHistory } from '../../state/ChatProvider';
import { useRoute } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from '../../consts/colors';
const SendMessageBar = () => {
    const route = useRoute();
    const [req,setReq] = useState('')
    const {sendMessage} = useHistory()
    const handleSend = () => {
      if(route?.params?.chatId){
        sendMessage(route?.params?.chatId,req)
        setReq('')
      }
      Keyboard.dismiss();
    }
    
  return (
    <View style={styles.container}>
      <Input
        placeholder="Asc me something..."
        value={req}
        onChangeText={setReq}
      />
      <MainButton variant="round" onPress={handleSend}>
        <FontAwesome
          name="send"
          size={14}
          color={colors.white}
        />
      </MainButton>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:6,
        alignItems: 'center'
    },
    t1:{
        height:50,
        flex:1,
        backgroundColor:'red'
    },
    t2:{
        height:50,
        width:40,
        backgroundColor:'blue'
    },
})
export default SendMessageBar