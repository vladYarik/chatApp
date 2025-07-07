import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { IMessage } from '../../state/types'
import colors from '../../consts/colors'

interface props{
    message:IMessage
    isLast:boolean
}

const Message = ({ message, isLast }: props) => {
  const [animatedText, setAnimatedText] = useState(
    (message.role === "assistant" && isLast) ? "" : message.content
  );
  const isUserMessage = useMemo(() => message.role === "user", [message.role]);
  
  useEffect(() => {
    if (message.role === "assistant" && isLast ) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.content.length - 1) {
          setAnimatedText((prev) => prev + message.content[i]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [message]);
  return (
    <View
      style={[
        styles.container,
        isUserMessage ? styles.userContainer : styles.assistantContainer,
      ]}
    > 
      <View style={message.role === 'assistant' ? styles.triangle : styles.triangleRight}>

      </View>
      <Text>{animatedText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingVertical:12,
        paddingHorizontal:14,
        backgroundColor:colors.white,
        borderRadius:10,
        
        maxWidth:'75%',
        position:'relative'
    },
    triangle:{
      position:'absolute',
      top:10,
      left:-15,
      
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 0,
      borderRightWidth: 15,
      borderBottomWidth: 15,
      
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: colors.white, 
    },
    triangleRight:{
      position:'absolute',
      top:10,
      right:-15,
      
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 15,
      borderRightWidth: 0,
      borderBottomWidth: 15,
      
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: colors.white, 
    },
    userContainer:{
        alignSelf:'flex-end'
    },
    assistantContainer:{
        alignSelf:'flex-start',
        backgroundColor:colors.white,
    }
})
export default Message