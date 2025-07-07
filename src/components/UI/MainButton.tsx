import { View, Text, StyleSheet, Button, Pressable, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import colors from '../../consts/colors'
import { PressableProps } from 'react-native-gesture-handler'
interface props extends PressableProps{
    children:ReactNode
    variant?:"round" | "long"
    disabled?:boolean
}
const MainButton = ({children,disabled,variant = 'long',...props}:props) => {
    const getStyles = () => {
        switch(variant){
            case 'round':
                return styles.round
            case 'long':
                return styles.long;
            default:
                return ''
        } 
    }
  return (

        <TouchableOpacity disabled={disabled} activeOpacity={0.8} onPress={() => props.onPress()} style={[styles.button,getStyles(),disabled ? styles.disabled : '']}>
            <Text style={{color:colors.white}}>
                {children}
            </Text>
        </TouchableOpacity>

  )
}
const styles = StyleSheet.create({
    button:{
        display:'flex',
        gap:10,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.black,
  
    },
    disabled:{
        backgroundColor:colors.darkGray
    },
    round:{
        borderRadius:100,
        width:52,
    },
    long:{
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10
    }
})
export default MainButton