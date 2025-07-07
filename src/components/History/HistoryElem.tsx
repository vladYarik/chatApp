import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IHistory } from '../../state/types'
import colors from '../../consts/colors'
import { useNavigation } from '@react-navigation/native'
import getLocaleTime from '../../funcs/getLocaleTime'
interface props{
    history:IHistory
}
const HistoryElem = ({history}:props) => {
    const navigation = useNavigation()
    const cropText = (text:string) => {
      return text.slice(0,18) + (text.length > 17 ? '..' : '')
    }
  return (
    <TouchableOpacity
        activeOpacity={0.6}
      onPress={() => navigation.navigate("Chat", { chatId: history.id })}
      style={styles.container}
    >
      <Text>{cropText(history.title)}</Text>
      <Text style={{color:colors.darkGray,fontSize:12}}>{getLocaleTime(history.timestamp)}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width:'100%',
    gap: 16,
    paddingHorizontal:16,
    paddingVertical:16,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:colors.white,
    borderWidth:1,
    borderRadius:10,
    borderColor:colors.borderGray, 
  },

});
export default HistoryElem