import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colors from '../../consts/colors'
import { IMessage } from '../../state/types'
import Message from './Message'
import { FlatList } from 'react-native-gesture-handler'
import { useHistory } from '../../state/ChatProvider'
import MessageLoading from './MessageLoading'

interface props{
    messages:IMessage[]
}

const MessagesContainer = ({messages}: props) => {
    const { isReqLoading,isChatLoading } = useHistory();
    const flatListRef = useRef(null)


    useEffect(() => {
      if (flatListRef.current && messages.length > 0) {
        flatListRef.current.scrollToEnd({ animated: true });
      }
    }, [messages]);
    
    if(isChatLoading){
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={43}/>
        </View>
      )
    }
  return (
    <FlatList 
        ref={flatListRef}
        data={isReqLoading ? [...messages,'loading'] : messages} 
        extraData={messages}
        renderItem={({ item,index }) => {
            if(item === 'loading'){
               return <MessageLoading />;
            }
            return <Message isLast={index+1 == messages.length} message={item} />;
        }}
        onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }}
        keyExtractor={(item,id) => id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        overScrollMode="never"
        contentContainerStyle={styles.container}
    >

    </FlatList>
  );
};
const styles = StyleSheet.create({
    container:{
        
        paddingHorizontal:15,
        paddingVertical:20,
    },
    loadingContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
})
export default MessagesContainer