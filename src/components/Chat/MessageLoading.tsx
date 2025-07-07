import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../consts/colors';

const MessageLoading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Thinking.....
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  text:{
    color:colors.darkGray
  }
});
export default MessageLoading