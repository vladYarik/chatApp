import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HistoryList from '../components/History/HistoryList';
import MainButton from '../components/UI/MainButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useHistory } from '../state/ChatProvider';

const HistoryScreen = ({navigation}) => {
  const {getAllHistories,shouldRefreshHistory,isHistoryLoading} = useHistory()

  useFocusEffect(
    React.useCallback(() => {
      if(shouldRefreshHistory){
        getAllHistories();
      }
    },[shouldRefreshHistory])
  )
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:28,fontWeight:'700'}}>
            Chats
          </Text>
          <Text>
            This is a history of chat contexts
          </Text>
        </View>
        
        {isHistoryLoading
          ?
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size={43}/>
          </View>
          :
          <HistoryList/>
        }
        <View style={styles.button}>
          <MainButton onPress={()=>navigation.navigate('Chat')}>Start a new chat</MainButton> 
        </View>

        
      </View>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:16,
    },
    button:{
      
    }

})
export default HistoryScreen