import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../consts/colors';
import { useHistory } from '../../state/ChatProvider';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import HistoryElem from './HistoryElem';
import HistoryNotFoundBanner from './HistoryNotFoundBanner';

const HistoryList = () => {
    const {history} = useHistory()
    
  return (
    <View style={styles.container}>
        {history.length > 0 
            ?
            <FlatList
                data={[...history]} 
               
                renderItem={({ item }) => <HistoryElem history={item} />}
                // onContentSizeChange={() => {
                //     flatListRef.current?.scrollToEnd({ animated: true });
                // }}
                keyExtractor={(item,id) => id}
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
                contentContainerStyle={{paddingVertical:10}}
            >

            </FlatList>
            :
            <View style={styles.emptyBanner}>
                <HistoryNotFoundBanner/>
            </View>
        }

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    gap: 16,
  },
  list:{
    
  },
  emptyBanner: {
    width: "100%",
    padding: 16,
    flex:1,
    borderRadius: 10,
    alignItems: "center",
    gap: 4,
    
    
  },
});
export default HistoryList