import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../consts/colors'
import FontAwesome from "react-native-vector-icons/FontAwesome";


const HistoryNotFoundBanner = () => {
    const [dots,setDots] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDots((prev) => prev.length == 3 ? '.' : prev+'.')
        },500)
        return () => clearTimeout(timeout)
    })
  return (
    <View style={styles.emptyBanner}>
                    <Text style={{fontWeight:'600',fontSize:32,width:140,color:colors.darkGray}}>
                        No history{dots}
                    </Text>
                    
                    <Text style={{fontSize:16,color:colors.darkGray,fontWeight:'600'}}>
                        try to start a new chat
                    </Text>
    </View>
  )
}
const styles = StyleSheet.create({

  emptyBanner: {
    width: "100%",
    padding: 16,
  
    flex:1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent:'center',
    gap: 10,
    
    
  },
});
export default HistoryNotFoundBanner